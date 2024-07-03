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
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch {
    res.status(500).send("Error registering new user");
  }
});

export default router;
