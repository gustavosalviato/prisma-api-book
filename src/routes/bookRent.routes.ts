import { Router } from "express";
import { CreateBookRentController } from "../modules/bookRent/useCases/createBookRent/createBookRentController";
import { getAllBookRentsController } from "../modules/bookRent/useCases/getAllBookRents.ts/getAllBookRentsController";

const bookRentRoutes = Router()

const createBookController = new CreateBookRentController()
const getAllBookRents = new getAllBookRentsController()


bookRentRoutes.post('/', createBookController.handle)
bookRentRoutes.get('/', getAllBookRents.handle)


export { bookRentRoutes }
