const express=require('express');
const feedRouter = require('./routes/feedRoute');

const app =express();
app.use(express.json());

app.use('/api/feed', feedRouter);

module.exports = app;