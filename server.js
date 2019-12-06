const express = require("express");
const session = require("express-session");
const knexSession = require("connect-session-knex");
const server = express();
const userRoute = require("./routes/userRoute");

const sessionConfig = {
  name: "session",
  secret: "secretKey",
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new knexSession({
    knex: require("./data/dbConfig"),
    tablename: "current-session",
    createtable: true,
    clearInterval: 1000 * 60 * 60
  })
};

server.use(express.json());
server.use(session(sessionConfig));
server.use("/api", userRoute);

module.exports = server;
