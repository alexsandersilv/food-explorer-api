/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable('dishes', table => {
  table.increments('id');
  table.text('img').defaultTo('');
  table.text('name');
  table.text('category');
  table.text('ingredients');
  table.text('price');
  table.text('description');
  table.timestamp('created_at').default(knex.fn.now());
  table.timestamp('updated_at').default(knex.fn.now());
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('dishes');