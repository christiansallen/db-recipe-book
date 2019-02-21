const express = require("express");
const router = express.Router();
const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db("dishes")
    .then(dish => {
      if (dish.length === 0) {
        res.status(404).json({ message: "There are no dishes" });
      } else {
        res.status(200).json(dish);
      }
    })
    .catch(() => res.status(500).json({ message: "Server error" }));
});

router.get("/", (req, res) => {});

module.exports = router;
