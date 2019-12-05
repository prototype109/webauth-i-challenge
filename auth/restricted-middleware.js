const bcrypt = require("bcryptjs");
const Users = require("../data/dbHelper");

module.exports = async function(req, res, next) {
  const { username, password } = req.headers;
  if (username && password) {
    return await Users.getUser(username)
      .then(user => {
        if (user.length && bcrypt.compareSync(password, user[0].password)) {
          next();
        } else {
          res.status(401).json({ message: "invalid credentials" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  } else {
    res.status(400).json({ message: "please input valid credentials" });
  }
};
