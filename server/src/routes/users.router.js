const express = require("express");

const usersController = require("../controllers/users.controller");

const usersRouter = express.Router();

usersRouter.post("/signup", usersController.postNewUser);

usersRouter.post("/account", usersController.postUserLogin);

module.exports = usersRouter;
