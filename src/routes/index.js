import { Router } from 'express'
import warehouseRouter from '#app/routes/warehouse.js'
import inventoryRouter from '#app/routes/inventories.js'

const routes = Router()

// Routing middleware


// All possible routes
routes.use('/api/warehouse', warehouseRouter)
routes.use('/api/inventories', inventoryRouter)


export default routes
