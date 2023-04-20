import { Router } from 'express'
import InventoryController from '#controllers/inventory.js'

const inventoryRouter = Router()

inventoryRouter
    .get('/', InventoryController.listAll)
    .delete('/:id', InventoryController.deleteById)


export default inventoryRouter
