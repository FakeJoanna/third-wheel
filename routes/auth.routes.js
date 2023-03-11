const express = require('express');
const router = express.Router();
const User = require("../models/User.model.js")
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const { isLoggedIn, isLoggedOut } = require('../utils/middleware/middleware.js');

//GET SIGNUP

router.get("/signup", isLoggedOut, (req, res, next) => {
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
    .then(() => res.redirect("/user-profile"), { newUser })
    .catch((error) => next(error))
})

// POST API DB - LOGIN

router.post("/api/users", isLoggedOut, (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({username})
    .then(user => {
        if(!user) { //no user
            res.json({ isUser: false })
        } else if (bcryptjs.compareSync(password, user.password)) { //succesful request
            
            req.session.currentUser = user;
            res.json({ isUser: true, user })

        } else { //incorrect password
            res.json({ correctPassword: false })
        }
    })
    .catch(error => console.log(error));
})

// POST LOGOUT

router.post('/logout', isLoggedIn, (req, res, next) => {
    req.session.destroy(err => {
        if (err) next(err);
        res.redirect('/');
    });
});

module.exports = router;
