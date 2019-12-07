module.exports = async function(req, res, next) {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(400).json({ message: "please input valid credentials" });
  }
};
