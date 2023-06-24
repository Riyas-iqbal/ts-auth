
import config from "@src/config"
import { ClientError } from "@src/exceptions/clientError"
import { UnauthorizedError } from "@src/exceptions/unauthorizedError"
import { CustomRequest } from "@src/middlewares/checkJwt"
import { changePassword, getUserByUsername, isPasswordCorrect } from "@src/state/users"
import { Response, Request } from "express"
import { sign } from "jsonwebtoken"


class AuthController {
    static login = async (req: Request, res: Response) => {
        let { username, password } = req.body

        if (!(username && password)) {
            throw new ClientError('Username and password are required')
        }

        const user = getUserByUsername(username)

        if (!user || !(await isPasswordCorrect(user.id, password))) {
            throw new UnauthorizedError('Username and password don\'t match')
        }

        const token = sign({ userId: user.id, username: user.username, role: user.role }, config.jwt.secret!, {
            expiresIn: '1h',
            notBefore: '0',
            algorithm: 'HS256',
            audience: config.jwt.audience,
            issuer: config.jwt.issuer
        })

        res.json({ token })
    }

    static changePassword = async (req: Request, res: Response) => {
        const id = (req as CustomRequest).token.payload.userId;

        const { oldPassword, newPassword } = req.body;
        if (oldPassword !== newPassword) {
            throw new ClientError("Password don't match")
        }

        if (!(await isPasswordCorrect(id, oldPassword))) {
            throw new UnauthorizedError("Old password doesnt match")
        }

        await changePassword(id,newPassword)

        res.status(204).send();
    }
}

export default AuthController