import InventoryService from '#services/inventory.js' 

class InventoryController {

  async listById(req, res) {
    try {
      const data = await InventoryService.listById(req.params.id)
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ message: error.message })
  }
}
}

export default new InventoryController()