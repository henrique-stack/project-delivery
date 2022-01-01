import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

export class FindAllDeliveriesDeliverymanController {
    async handle( request: Request, response: Response ) {
        const { id_deliveryman } = request;
        const findAllDeliveriesController = new FindAllDeliveriesUseCase();

        const result = await findAllDeliveriesController.execute(id_deliveryman);
        return response.json(result);
    } 
}