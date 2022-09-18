import { Request, Response } from "express";
import { prisma } from "../../../../client/client";

export class getAllBookRentsController {
    async handle(req: Request, res: Response) {
        const bookRents = await prisma.bookRent.findMany()

        res.json(bookRents)
    }
}