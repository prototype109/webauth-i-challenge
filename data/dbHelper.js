const db = require("./dbConfig");

module.exports = {
  addUser,
  getUser,
  getUsers
};

async function addUser(user) {
  return await db("users").insert(user);
}

async function getUser(user) {
  return await db("users").where("username", user);
}

async function getUsers() {
  return await db("users");
}
