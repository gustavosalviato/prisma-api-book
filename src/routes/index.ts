import { Router } from "express";
import { userRoutes } from "./user.routes";

const mainRoutes = Router()

mainRoutes.use('/users', userRoutes)

export { mainRoutes }