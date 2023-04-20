import Inventory from '#models/inventory.js';

class inventoryService {

  listById(id) {
    return Inventory.listById(id)
  }

}

export default new inventoryService();