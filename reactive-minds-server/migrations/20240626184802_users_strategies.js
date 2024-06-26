/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("users_strategies", function (table) {
    table.increments("id").primary();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("strategy_id")
      .references("id")
      .inTable("strategies")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.boolean("is_saved").defaultTo(true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("users_strategies");
}
