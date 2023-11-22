"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRouter = void 0;
const express = require("express");
const api_controller_1 = require("./api-controller");
const apiControllers = new api_controller_1.ApiControllers;
class ApiRouter {
    constructor() {
        this.router = express.Router();
        this.initailizeRoutes();
    }
    initailizeRoutes() {
        this.router.post('/userLogin', apiControllers.getUserLogin);
        this.router.get('/userInformation', apiControllers.getUserInfo);
        this.router.get('/getHomeInfo', apiControllers.getHomeInfo);
    }
}
exports.ApiRouter = ApiRouter;
//# sourceMappingURL=api-routes.js.map