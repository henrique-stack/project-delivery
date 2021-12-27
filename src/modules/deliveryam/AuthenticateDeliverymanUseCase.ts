import { sign } from 'jsonwebtoken'; 
import { compare } from 'bcrypt';
import { prisma } from '../../database/prismaClient';

interface ICreateDeliveryman {
    username: string;
    password: string;
}

export class AuthenticateDeliverymanUseCase {
    async execute({ username, password }: ICreateDeliveryman) {
        const deliveryman = await prisma.clients.findFirst({
            where: {
                username
            }
        })
        if(!deliveryman) {
            throw new Error("password or username invalid!");
        }

        const MatchPassword = await compare(password, deliveryman.password);

        if(!MatchPassword) {
            throw new Error("password invalid!");
        }
        
        const token = sign({username}, "008882c3cb7aeb0dde8b32d49e88e780", {
           subject: deliveryman.id,
           expiresIn: "1d"
        });
        return token;
    }
}