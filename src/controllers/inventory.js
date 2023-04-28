import InventoryService from '#services/inventory.js'

class InventoryController {
    async listAll(_req, res) {
        try {
            const data = await InventoryService.listAll()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async listById(req, res) {
        try {
            const data = await InventoryService.listById(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async deleteById(req, res) {
        try {
            const data = await InventoryService.deleteById(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async addInventoryItem(req, res) {
        try {
            await InventoryService.addInventoryItem(req.body)
            res.sendStatus(201)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async updateById(req, res) {
        try {
            if (!req.body.item_name && !req.body.quantity) {
                res.status(400).json({message: 'all are required'})
            } else {
                await InventoryService.updateById(req.params.id, req.body)
                res.sendStatus(200)
            }
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

}

export default new InventoryController()
