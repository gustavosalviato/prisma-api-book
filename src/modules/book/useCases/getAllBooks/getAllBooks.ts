import { Book } from "@prisma/client";
import { prisma } from "../../../../client/client";


export class GetAllBooks {
    async execute(): Promise<Book[]> {

        const books = await prisma.book.findMany({
            orderBy: {
                release_date: 'desc'
            },
            include: {
                BookRent: {
                    select: {
                        user: {
                            select: {
                                name: true,
                                email: true
                            }
                        }
                    }
                }
            }
        })

        return books
    }
} 