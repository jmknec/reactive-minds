/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("users_tools").del();
  await knex("users_tools").insert([
    {
      id: 1,
      user_id: 1,
      tool_id: 1,
      is_bookmarked: true,
      usage_id: 1,
    },
    {
      id: 2,
      user_id: 1,
      tool_id: 14,
      is_bookmarked: true,
      usage_id: 2,
    },
    {
      id: 3,
      user_id: 1,
      tool_id: 2,
      is_bookmarked: false,
      usage_id: 3,
    },
    {
      id: 4,
      user_id: 1,
      tool_id: 4,
      is_bookmarked: true,
      usage_id: 4,
    },
    {
      id: 5,
      user_id: 1,
      tool_id: 7,
      is_bookmarked: true,
      usage_id: 5,
    },
    {
      id: 6,
      user_id: 1,
      tool_id: 2,
      is_bookmarked: false,
      usage_id: 6,
    },
    {
      id: 7,
      user_id: 1,
      tool_id: 1,
      is_bookmarked: false,
      usage_id: 7,
    },
    {
      id: 8,
      user_id: 1,
      tool_id: 14,
      is_bookmarked: true,
      usage_id: 8,
    },
    {
      id: 9,
      user_id: 1,
      tool_id: 2,
      is_bookmarked: true,
      usage_id: 9,
    },
    {
      id: 10,
      user_id: 1,
      tool_id: 9,
      is_bookmarked: false,
      usage_id: 10,
    },
  ]);
}
