import { Router } from 'express'
import WarehouseController from '#controllers/warehouse.js'

const warehouseRouter = Router()

warehouseRouter.get('/', WarehouseController.listAll)

export default warehouseRouter