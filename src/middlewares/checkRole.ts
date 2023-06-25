import { Roles, getUser } from "../state/users"
import { NextFunction, Request, Response } from "express"
import { CustomRequest } from "./checkJwt"


export const checkRole = (roles: Array<Roles>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const user = getUser((req as CustomRequest).token.payload.userId);

        // Ensure we found a user
        if (!user) {
            res.status(404).json({ message: 'User not found' })
            return
        }

        // Ensure the user's role is contained in the authorized roles.
        if (roles.indexOf(user.role) > -1) {
            next()
        } else {
            res.status(403).json({message: 'Not enough permissions'})
            return
        }
    }
}