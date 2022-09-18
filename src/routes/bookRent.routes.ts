import { Router } from "express";
import { CreateBookRentController } from "../modules/bookRent/useCases/createBookRent/createBookRentController";
import { FindBookRentController } from "../modules/bookRent/useCases/findBookRent/findBookRentController";
import { getAllBookRentsController } from "../modules/bookRent/useCases/getAllBookRents.ts/getAllBookRentsController";

const bookRentRoutes = Router()

const createBookController = new CreateBookRentController()
const getAllBookRents = new getAllBookRentsController()
const findBookRent = new FindBookRentController()


bookRentRoutes.post('/', createBookController.handle)
bookRentRoutes.get('/', getAllBookRents.handle)
bookRentRoutes.get('/:id', findBookRent.handle)


export { bookRentRoutes }
