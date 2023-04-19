import database from '#database'


class Inventory {
    listAll() {
        return database
        .from('inventory')
        .select('id','item_name', 
        'description', 'category',
        'status', 'quantity',
        )
    }

async listById(id) {
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

    // deleteById(id) {

    // }
}

export default new Inventory()



