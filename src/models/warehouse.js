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
<<<<<<< HEAD
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
=======
            .select('id', 'warehouse_name', 'address',
                'city', 'country', 'contact_name',
                'contact_phone', 'contact_email',
            )
    }
>>>>>>> 0bd86d4 (feat(PTSEP3-15): added GET /api/warehouse/:id route)
}

export default new Warehouse()
