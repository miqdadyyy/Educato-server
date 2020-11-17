const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const apiRouter = require('./api');
global.Response = require('./utils/response');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', apiRouter);

module.exports = app;
