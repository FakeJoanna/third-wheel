const express = require("express")
const router = express.Router()
const Product = require("../models/Product.model")
const { isLoggedIn } = require("../utils/middleware/middleware.js")

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


/* GET home page */
router.get("/", (req, res, next) => {
  let products = Product.find({})
  products.then((response) => {
    const data = response.slice(0, 5)
    res.render("index", { data: data, userInSession: req.session.currentUser })
  })

  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
  res.setHeader("Pragma", "no-cache")
  res.setHeader("Expires", "0")
})

/* GET Search Bar */
router.get("/search", (req, res, next) => {
  const regex = new RegExp(req.query.query, "i")
  Product.find({ $or: [{ title: regex }, { description: regex }, { brand: regex }, { model: regex }] })
    .then((response) => {
      res.render("search", {
        data: response,
        userInSession: req.session.currentUser,
      })
    })
    .catch((error) => console.log("Error while getting products from DB: ", error))
})

/* GET user profile dashboard */
router.get("/user-profile", isLoggedIn, (req, res, next) => {
  {
    try {
      res.render("user-profile", { userInSession: req.session.currentUser })
    } catch {
      console.log(`Error while getting user profile page: ${error}`)
    }
  }
})

module.exports = router
