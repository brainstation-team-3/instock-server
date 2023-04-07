
exports.up = function(knex) {
    return knex.schema.createTable('inventory', (table) => {
        table.uuid('id').primary()
        table
            .uuid('warehouse_id')
            .references('warehouse.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.string('item_name').notNullable()
        table.string('description').notNullable()
        table.string('category').notNullable()
        table.string('status').notNullable()
        table.integer('quantity').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('inventory')
}
