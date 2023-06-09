exports.up = function(knex) {
    return knex.schema.createTable('warehouse', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('(UUID())'))
        table.string('warehouse_name').notNullable()
        table.string('address').notNullable()
        table.string('city').notNullable()
        table.string('country').notNullable()
        table.string('contact_name').notNullable()
        table.string('contact_position').notNullable()
        table.string('contact_phone').notNullable()
        table.string('contact_email').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('warehouse')
}
