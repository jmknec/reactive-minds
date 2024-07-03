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
  } catch {
    return res.status(500).send("Error getting strategies");
  }
});
//get list of strategies by emotional state
router.route("/emotions/:state").get(async (req, res) => {
  const state = req.params.state;
  try {
    const stateStrategies = await knex
      .select("*")
      .from("strategies")
      .where("emotional_state", state);
    if (stateStrategies.length < 1) {
      return res.status(404).send("Unable to find strategies");
    }
    res.json(stateStrategies);
  } catch {
    return res.status(500).send("Error getting strategies");
  }
});
//get one strategy by id
router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
    const strategy = await knex.select("*").from("strategies").where("id", id);
    if (strategy.length < 1) {
      return res.status(404).send("Strategy does not exist");
    }
    res.json(strategy);
  } catch {
    return res.status(500).send("Error getting strategies");
  }
});
export default router;
