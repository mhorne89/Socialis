const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/users");

router.post("/login", (req, res, next) => {
  const id = req.body.productId;
  
  User.findOne({ email: req.body.email, password: req.body.password })
    .exec()
    .then(doc => {
      if (doc) 
        res.status(200).json(doc);
      else
        res.status(404).json({ message: 'No valid entry found for provided ID' });
    })
    .catch(err => res.status(500).json({ error: err }));
});

router.post("/register", (req, res, next) => {
  req.body.id = new mongoose.Types.ObjectId()
  
  const user = new User(req.body);
  
  user
    .save()
    .then(result => res.status(201).json(result))
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;