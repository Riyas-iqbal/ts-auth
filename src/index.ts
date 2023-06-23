import express from "express";
import { json } from 'body-parser'
import { errorHandler } from './middlewares/errorHandler'
import routes from './routes/index';
import config from "./config/index";

const app = express();

app.use(json())

// additional middlewares

app.use('/' + config.prefix, routes)

app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`server is listening on port ${config.port}`);
});