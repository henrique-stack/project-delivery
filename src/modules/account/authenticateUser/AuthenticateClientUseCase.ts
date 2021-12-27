import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from 'jsonwebtoken';
interface IAuthenticate {
    username: string;
    password: string;
}

export class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticate) {
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })
        if(!client) {
            throw new Error("password or username invalid!");
        }

        const MatchPassword = await compare(password, client.password);

        if(!MatchPassword) {
            throw new Error("password invalid!");
        }
        
        const token = sign({username}, "008882c3cb7aeb0cce8b32d49e88e780", {
           subject: client.id,
           expiresIn: "1d"
        });
        return token;
    }
}