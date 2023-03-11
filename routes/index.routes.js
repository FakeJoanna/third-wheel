const express = require('express');
const router = express.Router();
const Product = require("../models/Product.model");
const { isLoggedIn } = require('../utils/middleware/middleware.js');

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET Search Bar */
router.get("/search", (req, res, next) => {
  Product.find(req.query)
  .then((allDbProducts)=>{
    res.render("search", ({data: allDbProducts}));
  })
  .catch(error => console.log("Error while getting products from DB: ", error));
})

/* GET user profile dashboard */
router.get("/user-profile", isLoggedIn, (req, res, next) => {
  const {username} = req.query
  res.render("user-profile", {username});
})

module.exports = router;
