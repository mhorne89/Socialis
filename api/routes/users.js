const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/users");

router.post("/register", (req, res, next) => {
  req.body.id = new mongoose.Types.ObjectId()
  
  const user = new User(req.body);
  
  user
    .save()
    .then(result => res.status(201).json(result))
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;