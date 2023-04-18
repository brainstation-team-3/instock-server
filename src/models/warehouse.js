import database from '#database'

class Warehouse {
    listAll() {
        return database
            .from('warehouse')
            .select('id', 'warehouse_name', 'address',
                'city', 'country', 'contact_name',
                'contact_phone', 'contact_email',
            )
    }

    listById(id) {
        return database
            .distinct('id')
            .first()
            .from('warehouse')
            .where('id', id)
            .select('id', 'warehouse_name', 'address',
                'city', 'country', 'contact_name',
                'contact_phone', 'contact_email',
            )
    }
}

export default new Warehouse()
