import { Router } from 'express'
import InventoryController from '#controllers/inventory.js'

const inventoryRouter = Router()

inventoryRouter
    .get('/', InventoryController.listAll)
    .get('/:id', InventoryController.listById)
    .delete('/:id', InventoryController.deleteById)
    .post('/', InventoryController.addInventoryItem)
    .put('/:id', InventoryController.updateById)

export default inventoryRouter
