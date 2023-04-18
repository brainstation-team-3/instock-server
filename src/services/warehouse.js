import Warehouse from '#models/warehouse.js'

class warehouseService {
    listAll() {
        return Warehouse.listAll()
    }

    listById(id) {
        return Warehouse.listById(id)
    }

    addWarehouse() {
        return Warehouse.addWarehouse()
    }

    deleteById(id) {
        return Warehouse.deleteById(id)
    }
}

export default new warehouseService();
