const express = require("express");
const server = express();
const userRoute = require("./routes/userRoute");

server.use(express.json());
server.use("/api", userRoute);

module.exports = server;
