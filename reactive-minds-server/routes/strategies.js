import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";

const router = express.Router();
const knex = initKnex(configuration);
//get global list of strategies
router.route("/").get(async (_req, res) => {
  try {
    const listStrategies = await knex("strategies");
    res.json(listStrategies);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error getting strategies");
  }
});
//get list of strategies by emotional state
router.route("/:state").get(async (req, res) => {
  const state = req.params.state;
  try {
    const stateStrategies = await knex
      .select("*")
      .from("strategies")
      .where("emotional_state", state);
    res.json(stateStrategies);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error getting strategies");
  }
});

export default router;
