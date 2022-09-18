import { Request, Response } from "express";
import { prisma } from "../../../../client/client";
import { CreateBookRentUseCase } from "./getAllBookRentsUseCase";

export class CreateBookRentController {
    async handle(req: Request, res: Response) {
        const { id_user, id_book } = req.body

        const createBookRent = new CreateBookRentUseCase()

        const result = await createBookRent.execute({ id_user, id_book })

        res.status(201).json(result)

    }
}