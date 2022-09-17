import { Request, Response } from "express";
import { prisma } from "../../../../client/client";

export class UpdateBookController {
    async handle(req: Request, res: Response) {
        const { title, author, release_date } = req.body
        const { id } = req.params

        try {
            const book = await prisma.book.update({
                where: {
                    id
                },
                data: {
                    title,
                    author,
                    release_date
                }
            })

            return res.json({
                status: "success",
                message: "record updated with success"
            })

        } catch (err) {
            res.status(400).json({ status: 'error', message: 'could not udpate record' })
        }


    }
}