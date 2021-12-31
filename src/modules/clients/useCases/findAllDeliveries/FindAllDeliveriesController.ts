import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";


export class FindAllDeliveriesController {
    async handle(request: Request, response: Response) {
        const { id_client } = request.params;
        const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

        const result = await findAllDeliveriesUseCase.excute(id_client);

        return response.json(result);
    }
}