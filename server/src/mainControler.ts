import * as express from 'express';
 

const loggerMiddleware = (req: express.Request, res: express.Response, next: any) => {
    res.locals.print = "Hello Mike, This Middleware was built with TypeScript!"
    return next();
}

module.exports = loggerMiddleware;