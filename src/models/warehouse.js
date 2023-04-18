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
                'contact_email'
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
                'contact_email'
            )
    }

    addWarehouse() {
        return database
            .insert(req.body)
            .returning('*')
            .into('warehouse')
            .then(function(data) {
                res.send(data)
            })
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

}

export default new Warehouse()
