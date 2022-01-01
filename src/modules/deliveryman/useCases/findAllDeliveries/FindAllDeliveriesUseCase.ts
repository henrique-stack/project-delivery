import { prisma } from '../../../../database/prismaClient';

// somente os intregadores iram acessar a tabela de pedidos
// no banco de daddos

export class FindAllDeliveriesUseCase {
    async execute( id_deliveryman: string ) {
    const deliveryman = await prisma.deliveryman.findMany({
        where: {
            id: id_deliveryman
        },
        select : {
            id: true,
            username: true,
            Deliveries: true
        }
    });
    return deliveryman;
}
}