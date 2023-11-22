"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const api_routes_1 = require("./routes/api/api-routes");
//import Pug View 
const index_1 = require("./routes/index");
const user_1 = require("./routes/user");
const about_1 = require("./routes/about");
const contact_1 = require("./routes/contact");
const login_1 = require("./routes/login");
const debug = require('debug')('my express app');
const app = express();
const apiExpress = express();
const apiRouter = new api_routes_1.ApiRouter;
//Api Server port initial
const port = 5000;
const apiHeader = 'Access-Control-Allow-Origin';
const allowAllHeader = 'Access-Control-Allow-Headers';
const allowAllMethod = 'Access-Control-Allow-Methods';
const allMethod = 'GET,POST,PATCH,DELETE';
// View engine Set Up
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
apiExpress.use((request, response, next) => {
    request.on('end', () => {
        console.log(request.headers);
    });
    /**
     * Response
     */
    response.setHeader(apiHeader, "*");
    response.setHeader(allowAllHeader, "Origin, X-Requested-WIth, Content-Type, Accept, Authorization");
    response.setHeader(allowAllMethod, allMethod);
    response.setHeader(allowAllMethod, allMethod);
    next();
});
apiExpress.use('', apiRouter.router);
apiExpress.use((request, response) => {
    response.type('text/plain');
    response.status(404);
    response.send('Page is not found.');
});
app.use('/', index_1.default);
app.use('/users', user_1.default);
app.use('/about', about_1.default);
app.use('/contact', contact_1.default);
app.use('/login', login_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.set('port', process.env.PORT || 3000);
//�T�wport ��3001
//app.set('port', 3001);
apiExpress.listen(port, () => {
    console.log(`server is running on http://localhost:5000`);
});
const server = app.listen(app.get('port'), function () {
    debug(`Express server listening on port ${server.address().port}`);
    //  debug(`Express server listening on port ${3001}`);
});
//Api server , its port = 5000
//const apiServer = createServer((request: IncomingMessage, response: ServerResponse) => {
//    //Request 
//    let body:any = [];
//    request
//        .on('error', (err) => {
//            console.log("Request Error=>" + err)
//        })
//        .on('data', (chunk) => {
//            body.push(chunk);
//        })
//        .on('end', () => {
//            body = Buffer.concat(body).toString();
//            console.log("Body => " + body);
//            console.log("Request Header => " + request.headers);
//            console.log("Request Authorization => " + request.headers.authorization);
//        })
//    //Response
//    response.on('error', (err) => {
//        console.error(err);
//    });
//    response.writeHead(200, { "Content-Type": "text/plain" });
//    response.end('Hello World');
//});
//apiServer.listen(port);
//console.log("Running Local Server at port 500")
//# sourceMappingURL=app.js.map