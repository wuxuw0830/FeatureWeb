import * as express from 'express';
import { NextFunction } from 'express-serve-static-core';
const TextPlain = "text/plain"
export class ApiControllers {
    getUserLogin(request: express.Request, response: express.Response, next: NextFunction) {
        response.type(TextPlain);
        response.send('HomePage');
    }
}