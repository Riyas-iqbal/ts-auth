import { Request, Response, NextFunction } from 'express'
import { CustomError, IResponseError } from '../exceptions/customError'

type ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => any;

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    if (!(err instanceof CustomError)) {
        res.status(500).send(
            JSON.stringify({
                message: 'Server error, please try again later'
            })
        );
    } else {
        const customError: CustomError = err;
        let response: IResponseError = {
            message: customError.message
        };
        // Check if there is more info to return.
        if (customError.additionalInfo) response.additionalInfo = customError.additionalInfo;
        res.status(customError.status).type('json').send(JSON.stringify(response));
    }
}

