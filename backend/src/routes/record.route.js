import express from 'express'
const { Router } = express

import { createOne, updateOne, readAll, readOne } from '../controllers/record.controller.js'

import { userLoggedMiddleware } from '../middlewares/user.middleware.js'

const routes = Router()

routes.use(userLoggedMiddleware)

routes.post("/", createOne)
routes.put("/", updateOne)
routes.get("/", readAll)
routes.get("/:id", readOne)

export default routes
