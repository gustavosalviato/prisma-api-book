import { Request, Response } from "express";
import { prisma } from "../../../../client/client";

export class FindBookRentController {
    async handle(req: Request, res: Response) {

        const { id } = req.params

        const result = await prisma.bookRent.findFirst({
            where: {
                id
            }
        })


        res.json(result)

    }

}