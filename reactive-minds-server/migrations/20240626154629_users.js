/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("users", function (table) {
    table.uuid("id").primary();
    table.string("email").unique().notNullable();
    table.string("username").unique().notNullable();
    table.string("password_hash").unique().notNullable();
    table.string("role").defaultTo("parent or caregiver");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("users");
}
