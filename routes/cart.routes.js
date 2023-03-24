const express = require("express")
const router = express.Router()
const Product = require("../models/Product.model")

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


// GET CART ROUTE

router.get("/cart", (req, res) => {
  res.render("cart", { userInSession: req.session.currentUser })
})

// POST CART ROUTE

router.post("/cart", (req, res) => {
  let { shoppingCart } = req.body
  shoppingCart = JSON.parse(shoppingCart)

  numberOfItems = shoppingCart.length

  if (numberOfItems === 0) {
    res.render("cart", { userInSession: req.session.currentUser })
    return
  }

  const query = shoppingCart.map((id) => ({ _id: id }))

  Product.find({ $or: query })
    .then((response) => {
      const products = shoppingCart.map((id) => {
        return response.find((product) => product._id.toString() === id.toString())
      })
      res.render("cart", { products, numberOfItems, userInSession: req.session.currentUser })
    })
    .catch((error) => console.log(`Error fetching products from DB: ${error}`))
})

module.exports = router
