import { User } from "@prisma/client";
import { prisma } from "../../../../client/client";


export class GetAllUsersUseCase {
    async execute(): Promise<User[]> {
        const users = await prisma.user.findMany({
            orderBy: {
                created_at: 'desc'
            }
        })

        return users
    }
}