import { Request, Response } from "express"
import { prisma } from "../../../../client/client"

export class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        try {

            await prisma.user.delete({
                where: {
                    id
                }
            })

            return res.json({ status: 'success', message: 'record deleted with success!' })

        } catch (err) {
            res.status(400).json({ status: 'error', message: 'could not update record' })
        }



    }
}