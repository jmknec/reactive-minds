/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("users_strategies").del();
  await knex("users_strategies").insert([
    {
      id: 1,
      user_id: 1,
      strategy_id: 3,
      is_saved: true,
    },
    {
      id: 2,
      user_id: 1,
      strategy_id: 7,
      is_saved: true,
    },
    {
      id: 3,
      user_id: 1,
      strategy_id: 12,
      is_saved: false,
    },
  ]);
}
