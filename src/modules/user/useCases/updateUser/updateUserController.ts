import { Request, Response } from "express"
import { prisma } from "../../../../client/client"

export class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { name } = req.body

        try {
            const result = await prisma.user.update({
                where: {
                    id
                },
                data: {
                    name
                }
            })


            res.json({ status: 'success', message: 'record updated with sucess' })



        } catch (err) {
            res.status(400).json({ status: 'error', message: 'could not update record' })
        }
    }
}