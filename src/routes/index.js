const { Router } = require('express');

const ApiRouter = require('./api/v1');
const WebRouter = require('./web');

const AppRouter = Router();

AppRouter.use('/', WebRouter);
AppRouter.use('/api/v1', ApiRouter);

module.exports = AppRouter;
