import { Roles, getUser } from "@src/state/users"
import { NextFunction, Request, Response } from "express"
import { CustomRequest } from "./checkJwt"


export const checkRole = (roles: Array<Roles>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const user = getUser((req as CustomRequest).token.payload.userId)
    }
}