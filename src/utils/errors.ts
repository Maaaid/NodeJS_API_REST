import {number, string} from "zod";

export class AppError extends Error {
    public readonly statusCode: number
    public readonly code: string
    public readonly isOperationnal: boolean


    constructor(message: string, statusCode: number, code: string) {
        super(message);
        this.statusCode = statusCode
        this.code = code
        this.isOperationnal = true
    }
}


export class notFoundError extends AppError {
    constructor(message = 'Not Found') {
        super(message, 404, "Bad Request")
    }
}

