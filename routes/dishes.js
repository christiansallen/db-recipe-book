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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("dishes")
    .where({ id: id })
    .then(dish => {
      if (dish.length === 0) {
        res.status(404).json({ message: "There isn't a dish with that id" });
      } else {
        res.status(200).json(dish);
      }
    })
    .catch(() => res.status(500).json({ message: "Server error" }));
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(404).json({ message: "Please enter a name for the dish" });
  } else {
    db("dishes")
      .insert({ name })
      .then(dish => res.status(201).json(dish))
      .catch(() => res.status(500).json({ message: "Server error" }));
  }
});

module.exports = router;
