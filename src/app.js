const express = require("express");
const feedRouter = require("./routes/feedRoute");
const { handleError } = require("./middleware/errorHandler");

const app = express();
app.use(express.json());

app.use("/api/feed", feedRouter);
app.use(handleError);

module.exports = app;
