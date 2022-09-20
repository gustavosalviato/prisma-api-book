import { Request, Response } from "express";
import { prisma } from "../../../../client/client";


export class DeleteBookRentControlller {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        try {
            const bookRent = await prisma.bookRent.delete({
                where:{
                    id
                }
            })

            res.status(204);

        } catch (err) {
            res.json({
                status: 'error',
                message: "could not delete record"
            })
        }


    }
}