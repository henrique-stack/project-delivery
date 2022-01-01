import { prisma } from '../../../../database/prismaClient';

interface IUpdateEndDate {
    id_delivery: string;
    id_deliveryman: string;
}

export class UpdateEndDateUseCase {
    async execute({ id_delivery, id_deliveryman }: IUpdateEndDate ) {
        const result = await prisma.deliveries.updateMany({
            where: {
                id: id_delivery,
                id_deliveryman
            },
            // essa propriedate 'data' vai receber os dados (no caso o id do entregador ) que seram adicionados ao 
            // banco de dados.
            data: {
               end_at: new Date(),
            }
        });
        return result;
    }
};