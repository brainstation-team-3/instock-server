import Warehouse from '#models/warehouse.js'

class warehouseService {
    listAll() {
        return Warehouse.listAll()
    }
}

export default new warehouseService();
