import { Router } from 'express';

import { AuthenticateClientController } from './modules/account/authenticateUser/AuthenticateClientController';
import { CreateClientController } from "./modules/clients/useCase/createClient/createClientController";
import { CreateDeliverymanController } from './modules/deliveryman/useCase/createDeliverymanController';

const router = Router();

const authenticate = new AuthenticateClientController();
const createClient = new CreateClientController();
const createDeliveryman = new CreateDeliverymanController();

router.post('/authenticate', authenticate.handle);
router.post('/client', createClient.handle);
router.post('/deliveryman', createDeliveryman.handle);

export { router }
