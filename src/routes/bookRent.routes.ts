import { Router } from "express";
import { CreateBookRentController } from "../modules/bookRent/useCases/createBookRentController";

const bookRentRoutes = Router()

const createBookController = new CreateBookRentController()


bookRentRoutes.post('/', createBookController.handle)


export { bookRentRoutes }
