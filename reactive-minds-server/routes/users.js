import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";
import bcrypt from "bcrypt";

const router = express.Router();
const knex = initKnex(configuration);

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
      return res
        .status(404)
        .send("User does not exist. Please register for an account.");
    }
    const password_hash = user[0].password_hash;
    if (await bcrypt.compare(password, password_hash)) {
      return res.send(`Successfully logged in. Welcome, ${user[0].username}!`);
    }
    res.send("Incorrect password.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in.");
  }
});

export default router;
