import express from "express";
import { apiRouter } from './src/api';
import bodyParser from "body-parser";
import { errorHandler } from './src/middleware/error-handler';
import { appMiddleware } from './src/middleware/app-middleware';
import logger from './src/util/logger';
import config from './src/config';
import "reflect-metadata";
import { createDatabaseConnection } from './src/config/database';

//establish database connection
createDatabaseConnection();

// Create Express server
let app = express();
//app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(appMiddleware(app));
//app.use(expressValidator());

// routes
app.use('/api', apiRouter);
app.use(errorHandler);

// Express server configuration
app.listen(config.port, () => {
    logger.log(`server started at port ${config.port}`);
});

export default app;