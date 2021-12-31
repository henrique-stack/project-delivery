import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from 'jsonwebtoken';
interface IAuthenticate {
    username: string;
    password: string;
}

export class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticate) {
        const createClient = await prisma.clients.findFirst({
            where: {
                username
            }
        });
        
        if(!createClient) {
            throw new Error("username invalid!");
        }

        const MatchPassword = await compare(password, createClient.password);

        if(!MatchPassword) {
            throw new Error("password invalid!");
        }
        
        const token = sign({username}, "008882c3cb7aeb0cce8b32d49e88e780", {
           subject: createClient.id,
           expiresIn: "1d"
        });
        
        return token;
    }
}