import Warehouse from '#models/warehouse.js'

class warehouseService {
    listAll() {
        return Warehouse.listAll()
    }

    listById(id) {
        return Warehouse.listById(id)
    }
<<<<<<< HEAD

    addWarehouse(warehouse) {
        return Warehouse.addWarehouse(warehouse)
    }

    deleteById(id) {
        return Warehouse.deleteById(id)
    }

    updateById(id, data) {
        return Warehouse.updateById(id, data)
    }
=======
>>>>>>> 0bd86d4 (feat(PTSEP3-15): added GET /api/warehouse/:id route)
}

export default new warehouseService()
