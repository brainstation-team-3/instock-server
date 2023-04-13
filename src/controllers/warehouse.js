import WarehouseService from '#services/warehouse.js';

class WarehouseController {
    async listAll(req, res) {
        try {
          const data = await WarehouseService.listAll()
          res.status(200).json(data)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

export default new WarehouseController();
