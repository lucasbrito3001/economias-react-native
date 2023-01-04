import express from 'express'
const { Router } = express

import { createUser, loginUser, readAll, readOne } from '../controllers/user.controller.js'

import { findUserMiddleware, userLoggedMiddleware } from '../middlewares/user.middleware.js'

const routes = Router()

routes.post("/login", loginUser)
routes.post("/", findUserMiddleware, createUser)

routes.use(userLoggedMiddleware)

routes.get("/", readAll)
routes.get("/:id", readOne)

export default routes
