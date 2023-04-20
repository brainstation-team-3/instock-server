import { Router } from 'express';
import InventoryController from '#controllers/inventory.js';

const inventoryRouter = Router();

inventoryRouter
    .get('/', InventoryController.listAll)
    .get('/:id', InventoryController.listById)
    .delete('/:id', InventoryController.deleteById)


export default inventoryRouter

export default inventoryRouter;