const express = require("express");
const router = express.Router();

router.route("/").get(async (req, res) => {
  res.send("Welcome to this guided project.");
});

module.exports = router;
