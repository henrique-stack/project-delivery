"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("express-async-errors");
var express_1 = __importDefault(require("express"));
var router_1 = require("./router");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(router_1.router);
app.use(function (err, request, response, next) {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message
        });
    }
    ;
    return response.status(500).json({
        status: "error",
        message: "internal server errors"
    });
});
app.listen(8080, function () { return console.log('server running!'); });
//# sourceMappingURL=server.js.map