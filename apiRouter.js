const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("Router User GET ");
});
router.post("/", (req, res) => {
  res.json("Router POST ");
});

router.put("/", (req, res) => {
  res.json("Router PUT ");
});

router.delete("/", (req, res) => {
  res.json("Router DELETE ");
});

module.exports = router;
