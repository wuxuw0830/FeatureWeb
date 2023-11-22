import * as express from 'express';
import { ApiControllers } from './api-controller';

const apiControllers = new ApiControllers
export class ApiRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.initailizeRoutes();
    }
    initailizeRoutes() {
        this.router.post('/userLogin', apiControllers.getUserLogin);
        this.router.get('/userInformation', apiControllers.getUserInfo)
        this.router.get('/getHomeInfo', apiControllers.getHomeInfo)
    }
}