import { checkJwt } from "@src/middlewares/checkJwt";
import AuthController from "../controllers/AuthControllers";
import { asyncHandler } from "../middlewares/asyncHandler";
import { Router } from "express";


const router = Router();

router.post('/signin', asyncHandler(AuthController.login))

router.post(
    '/change-password',
    [checkJwt],
    asyncHandler(AuthController.changePassword)
)

export default router;