import { Router } from 'express';
import InventoryController from '#controllers/inventory.js';

const inventoryRouter = Router();

inventoryRouter
  .get('/:id', InventoryController.listById)

export default inventoryRouter;