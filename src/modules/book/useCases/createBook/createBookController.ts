
import { Request, Response } from "express"
import { CreateBookUseCase } from "./createBookUseCase"

export class CreateBookController {
    async handle(req: Request, res: Response) {

        const { title, author, release_date } = req.body

        const createBook = new CreateBookUseCase()



        const result = createBook.execute({ title, author, release_date })


        res.status(201).json(result)
    }


}

