import { Router } from 'express'
import WarehouseController from '#controllers/warehouse.js'

const warehouseRouter = Router()

warehouseRouter
    .get('/', WarehouseController.listAll)
<<<<<<< HEAD
    .post('/', WarehouseController.addWarehouse)
    .get('/:id', WarehouseController.listById)
    .delete('/:id', WarehouseController.deleteById)
    .put('/:id', WarehouseController.updateById)

=======
    .get('/:id', WarehouseController.listById)
>>>>>>> 0bd86d4 (feat(PTSEP3-15): added GET /api/warehouse/:id route)

export default warehouseRouter
