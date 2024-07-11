import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
const knex = initKnex(configuration);
const jsonSecretKey = process.env.SECRET_KEY;

//register new user
router.route("/register").post(async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const password_hash = await bcrypt.hash(password, 10);
    const newUser = {
      email,
      username,
      password_hash,
    };
    const foundUser = await knex
      .select("*")
      .from("users")
      .where("email", email)
      .orWhere("username", username);
    if (foundUser.length != 0) {
      return res.status(400).send("User already exists. Please sign in.");
    }
    await knex("users").insert(newUser);
    res.status(201).send("User added successfully! You can now log in.");
  } catch {
    res.status(500).send("Error registering new user");
  }
});
//log into existing account
router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await knex.select("*").from("users").where("email", email);
    if (user.length == 0) {
      return res.status(404).json({
        token: "",
        message: "User does not exist. Please register for an account.",
      });
    }
    const password_hash = user[0].password_hash;
    if (await bcrypt.compare(password, password_hash)) {
      return res.json({
        token: jwt.sign({ username: user.username }, jsonSecretKey),
        message: `Successfully logged in. Welcome, ${user[0].username}!`,
      });
    }
    res.status(403).json({
      token: "",
      message: "Incorrect password.",
    });
  } catch {
    res.status(500).json({ token: "", message: "Error logging in." });
  }
});
//user's bookmarked tools
router
  .route("/:id/tools")
  .get(async (req, res) => {
    const id = req.params.id;
    try {
      const userTools = await knex
        .select(
          "tools.id",
          "tools.name",
          "tools.effect",
          "tools.description",
          "tools.avg_rating",
          "tool_usage.is_bookmarked",
          knex.raw("IFNULL(tool_usage.is_bookmarked, 0) AS is_bookmarked")
        )
        .from("tools")
        .leftJoin("tool_usage", function () {
          this.on("tools.id", "=", "tool_usage.tool_id").andOn(
            "tool_usage.user_id",
            "=",
            knex.raw("?", [id])
          );
        })
        .groupBy("tools.id", "tools.name", "tool_usage.is_bookmarked")
        .orderBy("tools.id");

      if (!userTools || userTools.length === 0) {
        return res.status(404).send("No tools found");
      }
      res.json(userTools);
    } catch {
      return res.status(500).send("Error getting tools");
    }
  })
  .post(async (req, res) => {
    const user_id = req.params.id;
    const { tool_id } = req.body;

    try {
      const userTools = await knex("tool_usage")
        .where("tool_usage.user_id", user_id)
        .andWhere("tool_usage.tool_id", tool_id);
      if (userTools.length > 0) {
        const isBookmarked = userTools[0].is_bookmarked === 1;
        const newBookmarkStatus = isBookmarked ? 0 : 1;
        await knex("tool_usage")
          .where("user_id", user_id)
          .andWhere("tool_id", tool_id)
          .update({ is_bookmarked: newBookmarkStatus });

        if (newBookmarkStatus === 1) {
          return res.status(204).json({ message: "Bookmark added" });
        } else {
          return res.status(204).json({ message: "Bookmark removed" });
        }
      } else {
        const savedTool = {
          user_id,
          tool_id,
          is_bookmarked: 1,
        };
        await knex("tool_usage").insert(savedTool);
        res
          .status(201)
          .json({ message: "Tool successfully bookmarked by user", savedTool });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error bookmarking tool");
    }
  });
//get user tools by effect
router.route("/:id/tools/:effect").get(async (req, res) => {
  const id = req.params.id;
  const effect = req.params.effect;
  try {
    const effectToolList = await knex
      .select(
        "tools.id",
        "tools.name",
        "tools.effect",
        "tools.description",
        "tools.avg_rating",
        knex.raw("IFNULL(tool_usage.is_bookmarked, 0) AS is_bookmarked")
      )
      .from("tools")
      .where("effect", effect)
      .leftJoin("tool_usage", function () {
        this.on("tools.id", "=", "tool_usage.tool_id").andOn(
          "tool_usage.user_id",
          "=",
          knex.raw("?", [id])
        );
      })
      .groupBy("tools.id", "tools.name", "tool_usage.is_bookmarked")
      .orderBy("tools.id");

    if (!effectToolList || effectToolList.length === 0) {
      return res.status(404).send("No tools found");
    }
    res.json(effectToolList);
  } catch {
    return res.status(500).send("Error getting tools");
  }
});
//get all usage-tracking data for user
router.route("/:id/tracking").get(async (req, res) => {
  const userId = req.params.id;
  try {
    const trackedTools = await knex
      .select(
        "tool_usage.tool_id",
        "tools.name",
        "tools.effect",
        "tools.avg_rating",
        "tool_usage.is_bookmarked",
        knex.raw("COUNT(tool_usage.tool_id) as track_count"),
        knex.raw("ROUND(AVG(tool_usage.usage_rating), 1) as user_avg")
      )
      .from("tool_usage")
      .join("tools", "tool_usage.tool_id", "=", "tools.id")
      .join("users", "tool_usage.user_id", "=", "users.id")
      .where("tool_usage.user_id", userId)
      .groupBy("tool_usage.tool_id", "tools.name", "tool_usage.is_bookmarked")
      .orderBy("tool_usage.tool_id");
    if (trackedTools.length < 1) {
      return res.status(404).send("Unable to find user's tracked tool usage");
    }
    return res.json(trackedTools);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error getting user's tracking data");
  }
});
//get user's usage-tracking data for individual tool
router
  .route("/:id/tracking/:toolId")
  .get(async (req, res) => {
    const userId = req.params.id;
    const toolId = req.params.toolId;
    try {
      const trackedTool = await knex
        .select("*")
        .from("tool_usage")
        .where("user_id", userId)
        .andWhere("tool_id", toolId);
      if (trackedTool.length < 1) {
        return res
          .status(404)
          .send("Unable to find user's tracking data for this tool");
      }
      return res.json(trackedTool);
    } catch {
      return res.status(500).send("Error getting user's tracking data");
    }
  })
  .post(async (req, res) => {
    const user_id = req.params.id;
    const tool_id = req.params.toolId;
    const { reactive_state, regulated_state, usage_rating } = req.body;

    try {
      const userTools = await knex("tool_usage")
        .where("tool_usage.user_id", user_id)
        .andWhere("tool_usage.tool_id", tool_id);

      const is_bookmarked = !userTools ? false : userTools[0].is_bookmarked;
      const toolTracked = {
        user_id,
        tool_id,
        reactive_state,
        regulated_state,
        usage_rating,
        is_bookmarked,
      };
      await knex("tool_usage").insert(toolTracked);
      return res.status(201).json({
        message: "Usage tracking data successfully added",
        toolTracked,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error adding tracking data");
    }
  });

export default router;
