const mongoose = require("mongoose");
const User = require("../models/users.model");

const postNewUser = (req, res, next) => {
  const { email, password, confirm } = req.body;

  User.find({ email })
    .exec()
    .then((user) => {
      console.log(req.body.password);
      //! ✅
      if (user.length >= 1) {
        return res.status(409).json({
          message: "E-mail already exists",
        });
        //! ✅
      } else if (!user || !password || !confirm) {
        res.status(400).json({
          message: "Email, password, & confirm are all required",
        });
        //! ✅
      } else if (password !== confirm) {
        res.status(400).json({
          message: "Passwords don't match",
        });
      } else {
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          email: req.body.email,
          password: req.body.password,
          confirm: req.body.confirm,
        });
        user
          .save()
          .then((result) => {
            console.log(result);
            res.status(201).json({
              message: "User created successfully",
              user: [
                {
                  userId: user._id,
                  email: user.email,
                  password: user.password,
                },
              ],
            });
          })
          .catch((err) => {
            res.status(500).json({
              error: err,
            });
          });
      }
    });
};

module.exports = { postNewUser };
