const db = require("./dbConfig");

module.exports = {
  addUser,
  getUser,
  getUsers
};

function addUser(user) {
  return db("users").insert(user);
}

function getUser(user) {
  return db("users").where("username", user);
}

function getUsers() {
  return db("users");
}
