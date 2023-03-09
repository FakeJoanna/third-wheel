const express = require('express');
const router = express.Router();
const User = require("../models/User.model.js")
const bcryptjs = require("bcryptjs");
const saltRounds = 10;

const axios = require("axios")

//GET SIGNUP
router.get("/signup", (req, res, next) => {
    res.render("auth/signup");
})

//POST SIGNUP

router.post("/signup", (req, res, next) => {
    const { username, email, password} = req.body

    bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword =>{
        return User.create({
            username,
            email,
            password: hashedPassword
        });
    })
    .then(newUser => console.log(`New user created: ${newUser}`))
    .then(() => res.redirect("index"))
    .catch((error) => next(error))
})

//POST Login
/*router.post("/", (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({username})
    .then(user => {
        if(!user) {
            fetch()
            document.get
            return
        } else if (bcryptjs.compareSync(password, user.passwordHash)) {
            res.render('/user-profile', { user })
        } else {
            res.render("index", { errorMessage: "Incorrect password." });
        }
    })
    .catch(error => console.log(error));
})
*/


module.exports = router;
