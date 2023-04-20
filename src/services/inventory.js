import Inventory from '#models/inventory.js';

class inventoryService {








  listById(id) {
    return Inventory.listById(id)
  }



    deleteById(id) {
        return Inventory.deleteById(id)
    }
}

export default new inventoryService();