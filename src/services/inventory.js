import Inventory from '#models/inventory.js'

class inventoryService {
    listAll() {
        return Inventory.listAll()
    }

    deleteById(id) {
        return Inventory.deleteById(id)
    }
}

export default new inventoryService();