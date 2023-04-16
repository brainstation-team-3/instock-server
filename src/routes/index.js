import { Router } from 'express'
import warehouseRouter from '#app/routes/warehouse.js'

const routes = Router()

// Routing middleware
routes.use((_req, _res, next) => {
    console.log("router middleware");
    next();
})


// All possible routes
routes.use('/api/warehouse', warehouseRouter)


export default routes
