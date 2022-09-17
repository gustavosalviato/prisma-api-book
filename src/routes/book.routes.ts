import { Router } from "express";
import { CreateBookController } from "../modules/book/useCases/createBook/createBookController";
import { GetAllBooksController } from "../modules/book/useCases/getAllBooks/getAllBooksController";

const bookRoutes = Router()

const createBookController = new CreateBookController()
const getAllBooks = new GetAllBooksController

bookRoutes.post('/', createBookController.handle)
bookRoutes.get('/', getAllBooks.handle)


export { bookRoutes }
