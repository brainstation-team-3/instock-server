import Warehouse from '#models/warehouse.js'

class warehouseService {
    listAll() {
        return Warehouse.listAll()
    }

    listById(id) {
        return Warehouse.listById(id)
    }

    addWarehouse(warehouse) {
        return Warehouse.addWarehouse(warehouse)
    }

    deleteById(id) {
        return Warehouse.deleteById(id)
    }

    updateById(id, data) {
        return Warehouse.updateById(id, data)
    }

    getInventory(id) {
        return Warehouse.getInventory(id)
    }
}

export default new warehouseService()
