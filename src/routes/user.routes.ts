import { Router } from "express";
import { CreateUserController } from "../modules/user/useCases/createUser/createUserController";
import { DeleteUserController } from "../modules/user/useCases/deleteUser/deleteUserController";
import { FindUserController } from "../modules/user/useCases/findUser/findUserCotronller";
import { GetAllUsersController } from "../modules/user/useCases/getAllUsers/getAllUsersController";
import { UpdateUserController } from "../modules/user/useCases/updateUser/updateUserController";

const userRoutes = Router()

const createUserController = new CreateUserController()
const getAllUserController = new GetAllUsersController()
const findUser = new FindUserController()
const deleteUser = new DeleteUserController()
const updateUser = new UpdateUserController()

userRoutes.post('/', createUserController.handle)
userRoutes.get('/', getAllUserController.handle)
userRoutes.get('/:id', findUser.handle)
userRoutes.delete('/:id', deleteUser.handle)
userRoutes.put('/:id', updateUser.handle)

export { userRoutes }
