const express = require("express");
const router = express.Router();

router.route("/").get(async (req, res) => {
  res.send("Hello! Backend with NodeJs.");
});

module.exports = router;
