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
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
