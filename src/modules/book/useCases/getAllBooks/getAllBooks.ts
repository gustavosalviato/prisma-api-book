import { Book } from "@prisma/client";
import { prisma } from "../../../../client/client";


export class GetAllBooks {
    async execute(): Promise<Book[]> {

        const books = await prisma.book.findMany()

        return books
    }
} 