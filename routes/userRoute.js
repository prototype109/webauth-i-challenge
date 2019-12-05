const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../data/dbHelper");
const restricted = require("../auth/restricted-middleware");
const userRoute = express.Router();

userRoute.post("/registration", async (req, res) => {
  const reqBody = req.body;
  const hash = bcrypt.hashSync(reqBody.password, 10);
  reqBody.password = hash;

  try {
    const user = await User.addUser(reqBody);
    if (user.length) {
      res.status(201).json({ message: "User has been added to the database" });
    } else {
      res.status(404).json({ message: "Username is already taken" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

userRoute.get("/login", restricted, async (req, res) => {
  try {
    const users = await User.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = userRoute;
