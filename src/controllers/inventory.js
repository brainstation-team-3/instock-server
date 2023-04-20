import InventoryService from '#services/inventory.js';

class InventoryController {
    async listAll(req, res) {
        try {
            const data = await InventoryService.listAll()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async deleteById(req, res) {
        try {
            const data = await InventoryService.deleteById(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

export default new InventoryController();   