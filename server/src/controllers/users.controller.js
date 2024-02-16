const bcrypt = require("bcrypt");
const saltRounds = 10;
const mongoose = require("mongoose");

const User = require("../models/users.model");

const postNewUser = (req, res, next) => {
  const { email, password, confirm } = req.body;

  User.find({ email })
    .exec()
    .then((user) => {
      console.log(password);
      //! ✅ WORKS
      if (user.length >= 1) {
        return res.status(409).json({
          message: "E-mail already exists",
        });
        //! ✅ WORKS
      } else if (!user || !password || !confirm) {
        res.status(400).json({
          message: "Email, password, & confirm are all required",
        });
        //! ✅ WORKS
      } else if (password !== confirm) {
        res.status(400).json({
          message: "Passwords don't match",
        });
      } else {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "Account created successfully",
                  user: [
                    {
                      userId: user._id,
                      email: user.email,
                    },
                  ],
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
};

const postUserLogin = (req, res, next) => {
  let { email, password } = req.body;
  User.findOne({ email: email })
    .exec()
    .then((user) => {
      console.log(user);
      if (!user) {
        res.status(404).json({
          message: "User not found",
        });
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(500).json({
            error: err,
          });
        }
        if (result) {
          console.log(result);
          res.status(200).json({
            message: "Login successful",
            user: [
              {
                email: email,
                password: password,
              },
            ],
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json({
        error: err,
      });
    });
};

module.exports = { postNewUser, postUserLogin };
