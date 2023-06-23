export class CustomError extends Error {
    constructor(
        public message: string,
        public status: number = 500,
        public additionalInfo: any = undefined
    ){
        super(message)
        this.message = message
        this.status = status
        this.additionalInfo = additionalInfo;
    }
}

export interface IResponseError{
    message: string;
    additionalInfo? : string;
}