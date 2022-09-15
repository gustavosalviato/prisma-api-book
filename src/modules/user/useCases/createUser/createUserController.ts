import { Request, Response } from "express"
import { CreateUserUseCase } from "./createUserUseCase"
export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email } = req.body

        const createUser = new CreateUserUseCase()

        const result = await createUser.execute({ name, email })

        res.status(201).json(result)

    }
}