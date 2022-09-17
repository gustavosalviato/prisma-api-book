import { Request, Response } from "express";
import { prisma } from "../../../../client/client";

export class FindBookController {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        const book = await prisma.book.findFirst({
            where: {
                id
            }
        })

        return res.json(book)

    }
}