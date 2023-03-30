const express = require('express');

const activiesRouter = require('./router/activies.router');

const app = (express());

app.use(express.json());

app.use(activiesRouter)

module.exports = app;