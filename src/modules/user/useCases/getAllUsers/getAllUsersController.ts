import { Request, Response } from "express"
import { GetAllUsersUseCase } from "./getAllUsersUseCase";


export class GetAllUsersController {
    async handle(req: Request, res: Response) {
        const getAllUsers = new GetAllUsersUseCase()

        const result = await getAllUsers.execute()

        return res.json(result)
    }
}