import express, { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import createError from 'http-errors';
require('dotenv').config();

import routes from './api/routes';

const port = process.env.PORT || '8000';

createConnection().then(() => {
    const app = express();
    app.use(bodyParser.json())

    app.use('/api', routes);

    app.use((_req: Request, _res: Response, next: NextFunction) => {
        next(createError(404));
    })

    app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
        res.status(error.status || 500);
        res.json({
            status: error.status,
            message: error.message,
            stack: error.stack
        })
    })

    app.listen(port, err => {
        if (err) return console.error(err);
        return console.log(`Server is listening on ${port}`);
    });
})