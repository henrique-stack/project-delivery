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
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesController';
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController';

const router = Router();

const authenticateClient = new AuthenticateClientController();
const authenticateDeliveryman = new AuthenticateDeliverymanController();

const createDelivery = new CreateDeliveryController();
const createDeliveryman = new CreateDeliverymanController();
const createClient = new CreateClientController();
const updateDeliveryman = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

const findAllDeliveriesDeliveryman = new FindAllDeliveriesDeliverymanController(); 
const findAllAvailableDeliveries = new FindAllAvailableController();
const findAllDeliveries = new FindAllDeliveriesController();

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

router.get('/deliveryman/deliveries',
ensureAuthenticateDeliveryman, 
findAllDeliveriesDeliveryman.handle)

router.get('/delivery/available',
 ensureAuthenticateDeliveryman,
 findAllAvailableDeliveries.handle)

router.put('/delivery/updateEndDate/:id',
ensureAuthenticateDeliveryman,
updateEndDateController.handle)

export { router }