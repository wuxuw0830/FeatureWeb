"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiControllers = void 0;
const TextPlain = "text/plain";
class ApiControllers {
    getUserLogin(request, response, next) {
        response.type(TextPlain);
        response.send('HomePage');
    }
}
exports.ApiControllers = ApiControllers;
//# sourceMappingURL=api-controller.js.map