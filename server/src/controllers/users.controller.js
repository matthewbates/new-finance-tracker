const bcrypt = require("bcrypt");
// chance to increase sal rounds as time goes on
const saltRounds = 10;
const mongoose = require("mongoose");

const User = require("../models/users.model");

const postNewUser = (req, res, next) => {
  const { email, password, confirm } = req.body;

  User.find({ email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "E-mail already exists",
        });
      } else if (!user || !password || !confirm) {
        res.status(400).json({
          message: "Email, password, & confirm are all required",
        });
      } else if (password !== confirm) {
        res.status(400).json({
          message: "Passwords don't match",
        });
      } else if (password.length <= 7) {
        res.status(400).json({
          message: "Password must be at least seven characters",
        });
      } else if (!password.match(/[0-9]/)) {
        res.status(400).json({
          message: "Password must contain one numeric character",
        });
      } else if (!password.match(/[a-z]/)) {
        res.status(400).json({
          message: "Password must contain at least one lowercase character",
        });
      } else if (!password.match(/[A-Z]/)) {
        res.status(400).json({
          message: "Password must contain at least one uppercase character",
        });
      } else if (!password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        res.status(400).json({
          message: "Password must contain at least one special character",
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
  const { email, password, transactions } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  User.findOne({ email: email })
    .exec()
    .then((user) => {
      console.log(user);
      if (!user) {
        return res.status(404).json({
          error: "Internal server error",
        });
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: err,
          });
        } else if (!user.email) {
          res.status(400).json({
            message: "Email doesn't exist",
          });
        } else if (!result) {
          res.status(401).json({
            message: "Incorrect username/password",
          });
        } else {
          return res.status(200).json({
            message: "Login successful",
            user: [
              {
                _id: user._id,
                email: email,
                password: password,
                transactions: transactions,
              },
            ],
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({
        error: err,
      });
    });
};

const getAllUsers = (req, res, next) => {
  const userId = req.body._id;

  User.find({ user: userId })
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json({
        count: docs.length,
        users: docs.map((user) => {
          return {
            email: user.email,
          };
        }),
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

module.exports = { postNewUser, postUserLogin, getAllUsers };
