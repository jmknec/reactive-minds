/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("emotional_states", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("alertness").notNullable();
    table.string("energy_level").notNullable();
    //TO DO: check lengths of descriptions for emotional states
    //- may need to change description field to text type instead of string
    table.string("description").notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("emotional_states");
}
