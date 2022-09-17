import { Router } from "express";
import { CreateBookController } from "../modules/book/useCases/createBook/createBookController";

const bookRoutes = Router()

const createBookController = new CreateBookController()

bookRoutes.post('/', createBookController.handle)


export { bookRoutes }
