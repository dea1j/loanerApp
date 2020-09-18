const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  const token = req.header("Authorization-Token");
  if (!token) return res.status(401).send("Unauthorised resource");

  try {
    const verified = jwt.verify(token, process.env.JWT_KEY);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Authorization details");
  }
};
