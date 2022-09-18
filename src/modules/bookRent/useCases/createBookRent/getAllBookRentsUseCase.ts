import { prisma } from "../../../../client/client";
import { AppError } from "../../../../errors/AppError";
import { CreateBookRentDTO } from "../../dtos/createBookRentDTO";

export class CreateBookRentUseCase {
    async execute({ id_user, id_book, }: CreateBookRentDTO): Promise<void> {

        // Verify if book exists
        const bookExists = await prisma.book.findFirst({
            where: {
                id: id_book
            }
        })

        if (!bookExists) {
            throw new AppError('Book does not exists!')
        }


        // Verify if book is already rented
        const bookAlreadyRented = await prisma.bookRent.findFirst({
            where: {
                id_book
            }
        })

        if (bookAlreadyRented) {
            throw new AppError('Book already rented!')
        }

        // Verify if user is exists
        const userExist = await prisma.user.findFirst({
            where: {
                id: id_user
            }
        })

        if (!userExist) {
            throw new AppError('User does not exists!')
        }



        await prisma.bookRent.create({
            data: {
                id_user,
                id_book,
            }
        })


    }
}