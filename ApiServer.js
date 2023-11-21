"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const port = 5000;
const server = (0, http_1.createServer)((request, response) => {
    response.on('Error', (err) => {
        console.error(err);
    });
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end('Hello World');
});
server.listen(port);
console.log('Sever is running on port 5000');
//# sourceMappingURL=ApiServer.js.map