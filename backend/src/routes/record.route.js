import express from 'express'
const { Router } = express

import { createUser, readAll } from '../controllers/record.controller.js'

import { userLoggedMiddleware } from '../middlewares/user.middleware.js'

const routes = Router()

routes.use(userLoggedMiddleware)

routes.post("/", findUserMiddleware, createUser)
routes.get("/", readAll)

export default routes
