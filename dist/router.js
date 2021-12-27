"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var AuthenticateClientController_1 = require("./modules/account/authenticateUser/AuthenticateClientController");
var createClientController_1 = require("./modules/clients/useCase/createClient/createClientController");
var createDeliverymanController_1 = require("./modules/deliveryman/useCase/createDeliverymanController");
var router = (0, express_1.Router)();
exports.router = router;
var authenticate = new AuthenticateClientController_1.AuthenticateClientController();
var createClient = new createClientController_1.CreateClientController();
var createDeliveryman = new createDeliverymanController_1.CreateDeliverymanController();
router.post('/authenticate', authenticate.handle);
router.post('/client', createClient.handle);
router.post('/deliveryman', createDeliveryman.handle);
//# sourceMappingURL=router.js.map