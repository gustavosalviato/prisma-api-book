import { Router } from "express";
import { CreateUserController } from "../modules/user/useCases/createUser/createUserController";
import { DeleteUserController } from "../modules/user/useCases/deleteUser/deleteUserController";
import { FindUserCotroller } from "../modules/user/useCases/findUser/findUserCotroller";
import { GetAllUsersController } from "../modules/user/useCases/getAllUsers/getAllUsersController";

const userRoutes = Router()

const createUserController = new CreateUserController()
const getAllUserController = new GetAllUsersController()
const findUser = new FindUserCotroller()
const deleteUser = new DeleteUserController()

userRoutes.post('/', createUserController.handle)
userRoutes.get('/', getAllUserController.handle)
userRoutes.get('/:id', findUser.handle)
userRoutes.delete('/:id', deleteUser.handle)

export { userRoutes }
