/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("strategies", function (table) {
    table.increments("id").primary();
    table.string("name").unique().notNullable();
    //TO DO: ?change type field to "set" data type -- look into this more
    table.string("type").notNullable();
    table.text("description").notNullable();
    table.string("emotional_state").notNullable();
    table.decimal("avg_rating", 8, 1).defaultTo(0);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("strategies");
}
