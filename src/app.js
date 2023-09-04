const express = require('express');
const dotenv = require('dotenv');
const compression = require('compression');
const { ErrorsMiddleware, LoggerMiddleware } = require('./middlewares');

dotenv.config();

const AppRouter = require('./routes');

const app = express();

// compresses all the responses
app.use(compression());

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// route handlers
app.use(AppRouter);

app.use(ErrorsMiddleware);

app.use(LoggerMiddleware);

module.exports = app;
