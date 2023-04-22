import Inventory from '#models/inventory.js'

class inventoryService {
    listAll() {
        return Inventory.listAll()
    }

    listById(id) {
        return Inventory.listById(id)
    }

    deleteById(id) {
        return Inventory.deleteById(id)
    }

    addInventoryItem(item) {
        return Inventory.addInventoryItem(item)
    }
}

export default new inventoryService()
