/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("email").unique().notNullable();
    table.string("username").unique().notNullable();
    //TO DO: set up hashing in server routes / API call setup
    //before sending to database
    table.string("password_hash").notNullable();
    table.string("role").defaultTo("parent or caregiver");
    table.timestamp("registered_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("users");
}
