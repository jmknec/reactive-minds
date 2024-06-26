/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      email: "example@email.com",
      username: "userone",
      password_hash: "1234567890",
      role: "parent or caregiver",
    },
  ]);
}
