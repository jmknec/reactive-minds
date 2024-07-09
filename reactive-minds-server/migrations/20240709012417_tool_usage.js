/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("tool_usage", function (table) {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.integer("tool_id").unsigned().notNullable();
    table.timestamp("used_date").defaultTo(knex.fn.now());
    table.string("reactive_state").nullable();
    table.string("regulated_state").nullable();
    table.decimal("usage_rating", 8, 1).notNullable();
    table.boolean("is_saved").defaultTo(false);
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("tool_id")
      .references("id")
      .inTable("tools")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("tool_usage");
}
