import { prisma } from '../../../../database/prismaClient';

interface IUpdateDeliveryman {
    id_delivery: string;
    id_deliveryman: string;
}

export class UpdateDeliverymanUseCase {
    async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman ) {
        const result = await prisma.deliveries.update({
            where: {
                id: id_delivery
            },
            // essa propriedate 'data' vai receber os dados (no caso o id do entregador ) que seram adicionados ao 
            // banco de dados.
            data: {
               id_deliveryman
            }
        });
        return result;
    }
};