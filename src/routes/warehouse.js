import { Router } from 'express'
import WarehouseController from '#controllers/warehouse.js'

const warehouseRouter = Router()

warehouseRouter
    .get('/', WarehouseController.listAll)
    .post('/', WarehouseController.addWarehouse)
    .get('/:id', WarehouseController.listById)
    .delete('/:id', WarehouseController.deleteById)
    .put('/:id', WarehouseController.updateById)
    .get('/:id/inventory', WarehouseController.getInventory)


export default warehouseRouter
