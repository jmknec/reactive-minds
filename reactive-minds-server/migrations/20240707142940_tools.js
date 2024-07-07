/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("tools", function (table) {
    table.increments("id").primary();
    table.string("name").unique().notNullable();
    table.string("effect").notNullable();
    table.text("description").notNullable();
    table.decimal("avg_rating", 8, 1).defaultTo(0);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("tools");
}
