import { Router } from "express";
import { CreateBookController } from "../modules/book/useCases/createBook/createBookController";
import { FindBookController } from "../modules/book/useCases/findBook/findBookController";
import { GetAllBooksController } from "../modules/book/useCases/getAllBooks/getAllBooksController";
import { FindUserController } from "../modules/user/useCases/findUser/findUserCotronller";

const bookRoutes = Router()

const createBookController = new CreateBookController()
const getAllBooks = new GetAllBooksController()
const findBook = new FindBookController()

bookRoutes.post('/', createBookController.handle)
bookRoutes.get('/', getAllBooks.handle)
bookRoutes.get('/:id', findBook.handle)


export { bookRoutes }
