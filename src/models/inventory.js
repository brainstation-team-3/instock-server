import database from '#database'

class Inventory {
    listAll() {
        return database
            .from('inventory')
            .join('warehouse', 'inventory.warehouse_id', '=', 'warehouse.id')
            .select('inventory.id', 'item_name', 'category', 'status', 'quantity', 'warehouse.warehouse_name')
    }

    listById(id) {
        return database
            .first()
            .from('inventory')
            .where('inventory.id', id)
            .innerJoin('warehouse', 'warehouse.id', '=', 'inventory.warehouse_id')
            .select(
                'inventory.id',
                'warehouse.warehouse_name',
                'inventory.item_name',
                'inventory.description',
                'inventory.category',
                'inventory.status',
                'inventory.quantity'
            )
    }

    deleteById(id) {
        return database.from('inventory').where('id', id).del()
    }

    addInventoryItem(item) {
        return database.insert(item).into('inventory')
    }

    updateById(id, data) {
        const { warehouse_id, ...updateData } = data
        return database
            .from('inventory')
            .where('inventory.id', id)
            .update({ ...updateData, 'inventory.updated_at': new Date() })
    }
}

export default new Inventory()
