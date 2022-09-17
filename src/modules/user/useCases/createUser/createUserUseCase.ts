import { User } from "@prisma/client";
import { prisma } from "../../../../client/client";
import { AppError } from "../../../../errors/AppError";
import { CreatUserDTO } from "../../dtos/createUserDTO";

export class CreateUserUseCase {
    async execute({ email, name }: CreatUserDTO): Promise<User> {

        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        })


        if (userAlreadyExists) {
            throw new AppError('user already exists!')
        }


        const user = await prisma.user.create({
            data: {
                email,
                name,
            }
        })

        return user
    }
}