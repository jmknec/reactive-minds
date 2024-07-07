import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";

const router = express.Router();
const knex = initKnex(configuration);
//get global list of tools
router.route("/").get(async (_req, res) => {
  try {
    const listTools = await knex("tools");
    res.json(listTools);
  } catch {
    return res.status(500).send("Error getting tools");
  }
});
//get list of tools by emotional state
router.route("/emotions/:effect").get(async (req, res) => {
  const effect = req.params.effect;
  try {
    const effectTools = await knex
      .select("*")
      .from("tools")
      .where("effect", effect);
    if (effectTools.length < 1) {
      return res.status(404).send("Unable to find tools");
    }
    res.json(effectTools);
  } catch {
    return res.status(500).send("Error getting tools");
  }
});
//get one tool by id
router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
    const tool = await knex.select("*").from("tools").where("id", id);
    if (tool.length < 1) {
      return res.status(404).send("Tool does not exist");
    }
    res.json(tool);
  } catch {
    return res.status(500).send("Error getting tools");
  }
});
export default router;
