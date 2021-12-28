import { Router } from 'express';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryam/AuthenticateDeliverymanController';
import { AuthenticateClientController } from './modules/account/authenticateUser/AuthenticateClientController';
import { CreateClientController } from "./modules/clients/useCase/createClient/CreateClientController";
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { CreateDeliverymanController } from './modules/deliveryman/useCase/CreateDeliverymanController';

const router = Router();

const delivery = new CreateDeliveryController();
const authenticateClient = new AuthenticateClientController();
const authenticateDeliveryman = new AuthenticateDeliverymanController();
const createClient = new CreateClientController();
const createDeliveryman = new CreateDeliverymanController();

router.post('/delivery', delivery.handle);
router.post('/deliveryman/authenticate', authenticateDeliveryman.handle);
router.post('/client/authenticate', authenticateClient.handle);

router.post('/deliveryman', createDeliveryman.handle);
router.post('/client/', createClient.handle);


export { router }
