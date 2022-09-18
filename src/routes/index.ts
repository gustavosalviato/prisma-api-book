import { Router } from "express";
import { userRoutes } from "./user.routes";
import { bookRoutes } from "./book.routes";
import { bookRentRoutes } from "./bookRent.routes";

const mainRoutes = Router()

mainRoutes.use('/users', userRoutes)
mainRoutes.use('/books', bookRoutes)
mainRoutes.use('/booksRents', bookRentRoutes)

export { mainRoutes }