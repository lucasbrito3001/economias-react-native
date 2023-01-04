import express from 'express'
const { Router } = express

import { createUser, loginUser, readAll } from '../controllers/user.controller.js'

import { findUserMiddleware, userLoggedMiddleware } from '../middlewares/user.middleware.js'

const routes = Router()

routes.post("/login", loginUser)
routes.post("/register", createUser)

routes.use(userLoggedMiddleware)

routes.post("/", findUserMiddleware, createUser)
routes.get("/", readAll)

export default routes
