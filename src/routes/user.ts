import UserController from "../controllers/UserController";
import { checkRole } from "../middlewares/checkRole";
import { checkJwt } from '../middlewares/checkJwt'
import { asyncHandler } from "../middlewares/asyncHandler";
import { Roles } from "../state/users";
import { Router } from "express";


const router = Router();

router
    .route('/')
    .get([checkJwt, checkRole([Roles.ADMIN])], asyncHandler(UserController.listAll))
    .post([], asyncHandler(UserController.newUser))

router
    .route('/:id([0-9a-z]{24})')
    .get([checkJwt, checkRole([Roles.USER, Roles.ADMIN])], asyncHandler(UserController.getOneById))
    .patch([checkJwt, checkRole([Roles.USER,Roles.ADMIN])], asyncHandler(UserController.editUser))
    .delete([checkJwt, checkRole([Roles.ADMIN])], asyncHandler(UserController.deleteUser))

export default router