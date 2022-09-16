import { Router } from "express";
import { CreateUserController } from "../modules/user/useCases/createUser/createUserController";
import { GetAllUsersController } from "../modules/user/useCases/getAllUsers/getAllUsersController";

const userRoutes = Router()

const createUserController = new CreateUserController()
const getAllUserController = new GetAllUsersController()

userRoutes.post('/', createUserController.handle)
userRoutes.get('/', getAllUserController.handle)

export { userRoutes }
