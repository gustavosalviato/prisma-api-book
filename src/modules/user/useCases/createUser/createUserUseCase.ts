import { User } from "@prisma/client";
import { prisma } from "../../../../client/client";
import { CreatUserDTO } from "../../dtos/createUserDTO";

export class CreateUserUseCase {
    async execute({ email, name }: CreatUserDTO): Promise<User> {
        const user = await prisma.user.create({
            data: {
                email,
                name,
            }
        })

        return user
    }
}