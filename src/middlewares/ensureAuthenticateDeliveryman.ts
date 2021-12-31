import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
} 

export async function ensureAuthenticateDeliveryman( 
    request: Request, response: Response, next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        return response.status(401).json({
            message: "Token missing"
        });
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, "008882c3cb7aeb0dde8b32d49e88e780") as IPayload
        // essa chave que colocamos aqui é igual a do authenticateDeliveryman
        request.id_deliveryman = sub;

        return next()

    } catch(err) {
        return response.status(401).json({
            message: "Invalid token"
        });
    }
};