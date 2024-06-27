import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";

const router = express.Router();
const knex = initKnex(configuration);

router.route("/").get(async (_req, res) => {
  try {
    const listStrategies = await knex("strategies");
    res.json(listStrategies);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error getting strategies");
  }
});

export default router;
