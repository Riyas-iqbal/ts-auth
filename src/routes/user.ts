import { Router } from "express";
import UserController from '../controllers/UserController'
import { asyncHandler } from '../middlewares/asyncHandler'

const router = Router();

router
    .route('/')
    .get([], asyncHandler(UserController.listAll))
    .post([], asyncHandler(UserController.newUser))

router
    .route('/:id([0-9a-z]{24})')
    .get([], asyncHandler(UserController.getOneById))
    .patch([], asyncHandler(UserController.editUser))
    .delete([],asyncHandler(UserController.deleteUser))

export default router