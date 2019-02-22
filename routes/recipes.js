const express = require("express");
const router = express.Router();
const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db("recipes")
    .then(recipe => {
      if (!recipe) {
        res.status(404).json({ message: "There are no recipes" });
      } else {
        res.status(200).json(recipe);
      }
    })
    .catch(() => res.status(500).json({ messge: "server error" }));
});

router.post("/", (req, res) => {
  const { name, dishes_ID } = req.body;
  if (name.length === 0) {
    res.status(404).json({ message: "Enter a name" });
  } else {
    db("recipes")
      .insert({ name, dishes_ID })
      .then(recipe => res.status(201).json(recipe))
      .catch(() => res.status(500).json({ message: "Server error" }));
  }
});

module.exports = router;
