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
  } catch (error) {
    console.error(error);
    res.status(500).json({ token: "", message: "Error logging in." });
  }
});
//get user's strategies
router.route("/:id/strategies").get(async (req, res) => {
  const id = req.params.id;
  try {
    const userStrategies = await knex
      .select(
        "strategies.name",
        "strategies.type",
        "strategies.description",
        "strategies.avg_rating",
        "users_strategies.is_saved"
      )
      .from("users_strategies")
      .join("users", "users_strategies.user_id", "=", "users.id")
      .join("strategies", "users_strategies.strategy_id", "=", "strategies.id")
      .where("users_strategies.user_id", id);
    if (userStrategies.length < 1) {
      return res.status(404).send("No strategies associated with this user");
    }
    console.log(userStrategies.length);
    res.json(userStrategies);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error getting user strategies");
  }
});

export default router;
