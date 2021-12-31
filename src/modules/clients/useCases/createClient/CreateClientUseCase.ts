import { prisma } from '../../../../database/prismaClient';
import { hash } from 'bcrypt';

interface IcreateClient {
    username: string;
    password: string;
}

export class CreateClientUseCase {
    async execute({ username, password }: IcreateClient ) {
        const clientExist = await prisma.clients.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive"
                }
            }
        })

        if(clientExist) {
            return new Error("Client Already exists")
        }

        const hashPassword = await hash(password, 10);

        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            }
        })
        return client;  
    }
}