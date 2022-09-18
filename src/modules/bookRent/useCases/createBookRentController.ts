import { Request, Response } from "express";
import { prisma } from "../../../client/client";

export class CreateBookRentController {
    async handle(req: Request, res: Response) {
        const { id_user, id_book } = req.body

        const bookRent = await prisma.bookRent.create({
            data: {
                id_user,
                id_book
            }
        })

        res.status(201).json(bookRent)
    }
}