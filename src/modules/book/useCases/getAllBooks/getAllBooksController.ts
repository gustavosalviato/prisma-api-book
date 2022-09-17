import { Request, Response } from "express"
import { GetAllBooks } from "./getAllBooks"

export class GetAllBooksController {
    async handle(req: Request, res: Response) {

        const getAllBooks = new GetAllBooks()

        const result = await getAllBooks.execute()

        return res.json(result)

    }
}