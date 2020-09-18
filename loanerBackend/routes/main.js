const router = require("express").Router();
const verifyToken = require("../validations/webtoken");

router.get("/dashboard", verifyToken, (req, res) => {
  console.log(req.user);
  res.json({
    user: {
      fullName: "Uche Elliot",
      balance: "5000.68",
    },
    loans: [],
  });
});

module.exports = router;
