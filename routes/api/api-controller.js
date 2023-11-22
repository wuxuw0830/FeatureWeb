"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiControllers = void 0;
const TextPlain = "text/plain";
const TextJson = "text/application-json";
class ApiControllers {
    getUserLogin(request, response, next) {
        response.type(TextPlain);
        response.send('HomePage');
    }
    getUserInfo(request, response, next) {
        response.type(TextPlain);
        response.send('Test Get ');
    }
    getHomeInfo(request, response, next) {
        const obj = { name: "test", statusCode: 200, content: "Nothing" };
        response.type(TextPlain);
        response.send(obj);
    }
}
exports.ApiControllers = ApiControllers;
//# sourceMappingURL=api-controller.js.map