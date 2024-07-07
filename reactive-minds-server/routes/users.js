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
//user's saved tools
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
          "users_tools.is_saved"
        )
        .from("users_tools")
        .join("users", "users_tools.user_id", "=", "users.id")
        .join("tools", "users_tools.tool_id", "=", "tools.id")
        .where("users_tools.user_id", id)
        .andWhere("is_saved", true);
      if (userTools.length < 1) {
        return res.status(404).send("No tools associated with this user");
      }
      console.log(userTools.length);
      res.json(userTools);
    } catch {
      return res.status(500).send("Error getting user tools");
    }
  })
  .post(async (req, res) => {
    const user_id = req.params.id;
    const { tool_id } = req.body;

    try {
      const userTool = await knex("users_tools")
        .where("user_id", user_id)
        .andWhere("tool_id", tool_id);
      if (userTool.length != 0) {
        const savedId = userTool[0].id;
        await knex("users_tools").where("id", savedId).update({ is_saved: 0 });
        return res
          .status(204)
          .json({ message: "Tool removed from user account", savedId });
      } else {
        const savedTool = {
          user_id,
          tool_id,
          is_saved: 1,
        };
        await knex("users_tools").insert(savedTool);
        res
          .status(201)
          .json({ message: "Tool saved to user account", savedTool });
      }
    } catch {
      return res.status(500).send("Error saving tool to user's account");
    }
  });

export default router;
