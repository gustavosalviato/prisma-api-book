import { Router } from "express";
import { userRoutes } from "./user.routes";
import { bookRoutes } from "./book.routes";

const mainRoutes = Router()

mainRoutes.use('/users', userRoutes)
mainRoutes.use('/books', bookRoutes)

export { mainRoutes }