import { prisma } from "../../../../database/prismaClient";



export class FindAllDeliveriesUseCase {
    // acho de deveriamos fazer uma verificação no id_client, antes de fazer a requisição.
    // pois qualquer valor que vai ser ocupado no parametro id da url consegue ter acesso aos dados.
    // com apenas o uso do token.
   async excute(id_client: string) {
       const deliveries = await prisma.clients.findMany({
           where: {
               id: id_client
           },
           select : {
               id: true,
               username: true,
               Deliveries: true
           }
       });

       return deliveries;
   }
}