const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/users");

router.post("/login", (req, res, next) => {
  const id = req.body.productId;
  
  User.findOne({ email: req.body.user.email, password: req.body.user.password }, 'first_name last_name email')
    .exec()
    .then(user => {
      if (user)
        res.status(200).json({ user });
      else
        res.status(400).json({ message: 'No valid entry found for provided ID' });
    })
    .catch(err => res.status(500).json({ error: err }));
});

router.post("/register", (req, res, next) => {
  req.body.user.id = new mongoose.Types.ObjectId();
  req.body.user.profile_photo = './assets/images/default-user.jpg';
  req.body.user.name = `${ req.body.user.first_name } ${ req.body.user.last_name }`;
    
  const user = new User(req.body.user);
  
  user
    .save()
    .then(user => res.status(201).json({ user }))
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;