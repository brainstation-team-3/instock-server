import database from '#database'

class Inventory {
    listAll() {
        return database
            .from('inventory')
            .join('warehouse', 'inventory.warehouse_id', '=', 'warehouse.id')
            .select('inventory.id', 'item_name', 'category', 'status', 
            'quantity', 'warehouse.warehouse_name')
    }

    deleteById(id) {
        return database
        .from('inventory')
        .where('id', id)
        .del()
    }
}

export default new Inventory()
