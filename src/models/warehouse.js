import database from '#database'

class Warehouse {
    listAll() {
        return database
            .from('warehouse')
            .select(
                'id',
                'warehouse_name',
                'address',
                'city',
                'country',
                'contact_name',
                'contact_phone',
                'contact_email',
            )
    }

    listById(id) {
        return database
            .distinct('id')
            .first()
            .from('warehouse')
            .where('id', id)
            .select(
                'id',
                'warehouse_name',
                'address',
                'city',
                'country',
                'contact_name',
                'contact_phone',
                'contact_email',
            )
    }

    addWarehouse(warehouse) {
        return database
            .insert(warehouse)
            .into('warehouse')
    }

    async deleteById(id) {
        const warehouse = await database
            .from('warehouse')
            .where('id', id)
            .del()

        const inventory = await database
            .from('inventory')
            .where('warehouse_id', id)
            .del()

        return id
    }

    async updateById(id, data) {
        return database
            .from('warehouse')
            .where('id', id)
            .update({...data, updated_at: new Date() })
    }

    async getInventory(id) {
        return database
            .from('inventory')
            .where('warehouse_id', id)
            .select(
                'id',
                'item_name',
                'category',
                'status',
                'quantity'
            )
    }
}

export default new Warehouse()
