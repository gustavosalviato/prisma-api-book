import { Request, Response } from "express";
import { prisma } from "../../../../client/client";

export class getAllBookRentsController {
    async handle(req: Request, res: Response) {
        const bookRents = await prisma.bookRent.findMany({
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                },

                book: {
                    select: {
                        title: true,
                        author: true,
                        release_date: true
                    }
                },
            }
        })

        res.json(bookRents)
    }
}