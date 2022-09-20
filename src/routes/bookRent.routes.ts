import { Router } from "express";
import { CreateBookRentController } from "../modules/bookRent/useCases/createBookRent/createBookRentController";
import { DeleteBookRentControlller } from "../modules/bookRent/useCases/deleteBookRent/deleteBookRentController";
import { FindBookRentController } from "../modules/bookRent/useCases/findBookRent/findBookRentController";
import { getAllBookRentsController } from "../modules/bookRent/useCases/getAllBookRents.ts/getAllBookRentsController";

const bookRentRoutes = Router()

const createBookController = new CreateBookRentController()
const getAllBookRents = new getAllBookRentsController()
const findBookRent = new FindBookRentController()
const deleteBookRentController = new DeleteBookRentControlller()

bookRentRoutes.post('/', createBookController.handle)
bookRentRoutes.get('/', getAllBookRents.handle)
bookRentRoutes.get('/:id', findBookRent.handle)
bookRentRoutes.delete('/:id', deleteBookRentController.handle)


export { bookRentRoutes }
