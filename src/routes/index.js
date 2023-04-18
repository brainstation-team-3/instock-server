import { Router } from 'express'
import warehouseRouter from '#app/routes/warehouse.js'

const routes = Router()

// Routing middleware


// All possible routes
routes.use('/api/warehouse', warehouseRouter)


export default routes
