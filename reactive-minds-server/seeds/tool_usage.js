/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("tool_usage").del();
  await knex("tool_usage").insert([
    {
      id: 1,
      user_id: 1,
      tool_id: 1,
      reactive_state: "anxious",
      regulated_state: "calm",
      usage_rating: 5,
      is_bookmarked: false,
    },
    {
      id: 2,
      user_id: 1,
      tool_id: 14,
      reactive_state: "",
      regulated_state: "",
      usage_rating: 4,
      is_bookmarked: true,
    },
    {
      id: 3,
      user_id: 1,
      tool_id: 2,
      reactive_state: "upset, worried",
      regulated_state: "better",
      usage_rating: 4.5,
      is_bookmarked: true,
    },
    {
      id: 4,
      user_id: 1,
      tool_id: 4,
      reactive_state: "down",
      regulated_state: "happy!",
      usage_rating: 5,
      is_bookmarked: false,
    },
    {
      id: 5,
      user_id: 1,
      tool_id: 7,
      reactive_state: "worried, anxious",
      regulated_state: "",
      usage_rating: 2,
      is_bookmarked: false,
    },
    {
      id: 6,
      user_id: 1,
      tool_id: 2,
      reactive_state: "",
      regulated_state: "",
      usage_rating: 5,
      is_bookmarked: true,
    },
    {
      id: 7,
      user_id: 1,
      tool_id: 1,
      reactive_state: "panicked",
      regulated_state: "better but still anxious",
      usage_rating: 3,
      is_bookmarked: false,
    },
    {
      id: 8,
      user_id: 1,
      tool_id: 14,
      reactive_state: "sad",
      regulated_state: "",
      usage_rating: 2,
      is_bookmarked: true,
    },
    {
      id: 9,
      user_id: 1,
      tool_id: 2,
      reactive_state: "",
      regulated_state: "",
      usage_rating: 4,
      is_bookmarked: true,
    },
    {
      id: 10,
      user_id: 1,
      tool_id: 9,
      reactive_state: "",
      regulated_state: "",
      usage_rating: 3.5,
      is_bookmarked: true,
    },
  ]);
}
