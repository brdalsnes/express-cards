import express from 'express';
import 'reflect-metadata';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
require('dotenv').config();

import routes from './api/routes';

const port = process.env.PORT || '8000';

createConnection().then(() => {
  const app = express();
  app.use(bodyParser.json())

  app.use('/api', routes);

  app.listen(port, err => {
    if (err) return console.error(err);
    return console.log(`Server is listening on ${port}`);
  });
})