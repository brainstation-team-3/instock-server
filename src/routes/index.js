import { Router } from 'express'
import warehouseRouter from '#app/routes/warehouse.js'
import inventoryRouter from '#app/routes/inventory.js'

const routes = Router()

// Routing middleware
routes.use((_req, _res, next) => {
    console.log("router middleware");
    next();
})


// All possible routes
routes.use('/api/warehouse', warehouseRouter)
routes.use('/api/inventory', inventoryRouter)


export default routes
