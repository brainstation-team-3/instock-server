import WarehouseService from '#services/warehouse.js'

class WarehouseController {
    async listAll(req, res) {
        try {
            const data = await WarehouseService.listAll()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async listById(req, res) {
        try {
            const data = await WarehouseService.listById(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async addWarehouse(req, res) {
        try {
            await WarehouseService.addWarehouse(req.body.newWarehouse)
            res.sendStatus(201)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async deleteById(req, res) {
        try {
            const data = await WarehouseService.deleteById(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async updateById(req, res) {
        try {
            await WarehouseService.updateById(req.params.id, req.body.data)
            res.sendStatus(200)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async getInventory(req, res) {
        try {
            const data = await WarehouseService.getInventory(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export default new WarehouseController()
