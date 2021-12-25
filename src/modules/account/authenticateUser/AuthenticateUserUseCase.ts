import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticate {
    username: string;
    password: string;
}

export class AuthenticateUserUseCase {
    async execute({ username, password }: IAuthenticate) {
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })
        if(!client) {
            throw new Error("password or username invalid!")
        }

        const MatchPassword = await compare(password, client.password)

        if(MatchPassword) {
           throw new Error("password or username invalid!") 
        }
    }
}

// let myfunction = (x, re) =>  x + re;
// myfunction()