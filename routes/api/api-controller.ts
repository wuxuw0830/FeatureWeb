import * as express from 'express';
import { NextFunction, Request } from 'express-serve-static-core';
const TextPlain = "text/plain"
const TextJson = "text/application-json"
export class ApiControllers {
    getUserLogin(request: express.Request, response: express.Response, next: NextFunction) {
        response.type(TextPlain);
        response.send('HomePage');
    }
    getUserInfo(request : express.Request, response: express.Response, next: NextFunction) {
        response.type(TextPlain)
        response.send('Test Get ')
    }
    getHomeInfo(request: express.Request, response: express.Response, next: NextFunction) {
        const obj = { name: "test", statusCode: 200, content: "Nothing" }
        response.type(TextPlain)
        response.send(obj)
    }
}