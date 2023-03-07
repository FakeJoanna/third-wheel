const express = require('express');
const router = express.Router();
const User = require("../models/User.model.js")

//GET LOGIN
router.get("/login", (req, res, next) => {
    res.render("auth/login");
})

//GET SIGNUP
router.get("/signup", (req, res, next) => {
    res.render("auth/signup");
})

//POST 

module.exports = router;