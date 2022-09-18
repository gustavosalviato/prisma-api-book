import { Book } from "@prisma/client";
import { prisma } from "../../../../client/client";
import { CreateBookDTO } from "../../dto/createBookDTO";

export class CreateBookUseCase {
    async execute({ author, release_date, title }: CreateBookDTO): Promise<Book> {

        const book = await prisma.book.create({
            data: {
                author,
                release_date,
                title,

            }
        })

        return book
    }


}