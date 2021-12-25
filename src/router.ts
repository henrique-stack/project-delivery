import { Router } from 'express';
import { CreateClientController } from "./clients/useCase/createClient/createClientController";

const router = Router();

const createClient = new CreateClientController();
router.get('/', createClient.handle);

export { router }
