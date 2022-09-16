import { User } from "@prisma/client"
import { Request, Response } from "express"
import { prisma } from "../../../../client/client"

export class FindUserCotroller {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        const user = await prisma.user.findFirst({
            where: {
                id
            }
        })

        return res.json(user)
    }
}