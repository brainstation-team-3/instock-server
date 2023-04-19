import { Router } from 'express'
import InventoryController from '#controllers/inventory.js'

const inventoryRouter = Router()

inventoryRouter
    .get('/', InventoryController.listAll)
    // .post('/', InventoryController.addinventory)
    .get('/:id', InventoryController.listById)
    // .delete('/:id', InventoryController.deleteById)


export default inventoryRouter
