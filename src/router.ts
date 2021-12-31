import { Router } from 'express';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryam/AuthenticateDeliverymanController';
import { AuthenticateClientController } from './modules/account/authenticateUser/AuthenticateClientController';
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from './modules/clients/useCases/findAllDeliveries/FindAllDeliveriesController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from './modules/deliveries/useCases/findAvailable/FindAllAvailableController';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { CreateDeliverymanController } from './modules/deliveryman/useCase/CreateDeliverymanController';

const router = Router();

const createDelivery = new CreateDeliveryController();
const authenticateClient = new AuthenticateClientController();
const authenticateDeliveryman = new AuthenticateDeliverymanController();
const createDeliveryman = new CreateDeliverymanController();
const updateDeliveryman = new UpdateDeliverymanController();
const findAllDeliveries = new FindAllDeliveriesController();

const findAllAvailableDeliveries = new FindAllAvailableController();
const createClient = new CreateClientController();

router.post('/deliveryman', createDeliveryman.handle);  
router.post('/client/', createClient.handle);

router.post('/deliveryman/authenticate', authenticateDeliveryman.handle);
router.post('/client/authenticate', authenticateClient.handle);

router.post('/delivery',
ensureAuthenticateClient,
 createDelivery.handle);

router.put('/delivery/updateDeliveryman/:id', 
ensureAuthenticateDeliveryman,
updateDeliveryman.handle);

router.get('/client/deliveries', 
ensureAuthenticateClient,
findAllDeliveries.handle)

router.get('/delivery/available',
 ensureAuthenticateDeliveryman,
 findAllAvailableDeliveries.handle)

export { router }