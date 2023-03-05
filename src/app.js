const express = require("express");
const feedRouter = require("./routes/feedRoute");
const { handleError } = require("./middleware/errorHandler");
const dotenv = require("dotenv");

const app = express();
dotenv.config({ path: "src/config/config.env" });

app.use(express.json());

app.use("/api/feed", feedRouter);
app.use(handleError);

module.exports = app;
