import { Request, Response } from "express";

type JsonErrorResponse = {
    status: 'fail' | 'error',
    message: String
}

export async function requestHandler(
    request: Request,
    response: Response,
    func: Function,
    successCode: number,
    errorCode: number,
    errorData: JsonErrorResponse
) {
    try {
        const data = await func();
        response.status(successCode).json({status: "success", data: data});
    } catch (error) {
        console.log(errorData.message, "\n", error);
        response.status(errorCode).json(errorData);
    };
};