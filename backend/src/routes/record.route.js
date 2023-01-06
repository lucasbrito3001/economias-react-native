import express from 'express'
const { Router } = express

import { createOne, updateOne, deleteOne, readAll, readOne } from '../controllers/record.controller.js'

import { userLoggedMiddleware } from '../middlewares/user.middleware.js'

const routes = Router()

routes.use(userLoggedMiddleware)

routes.post("/", createOne)
routes.put("/:id", updateOne)
routes.delete("/:id", deleteOne)
routes.get("/", readAll)
routes.get("/:id", readOne)

export default routes
