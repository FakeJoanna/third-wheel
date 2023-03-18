const express = require("express")
const router = express.Router()
const Product = require("../models/Product.model")

router.get("/cart", (req, res) => {
  res.render("cart", { userInSession: req.session.currentUser })
})

router.post("/cart", (req, res) => {
  let { shoppingCart } = req.body
  shoppingCart = JSON.parse(shoppingCart)

  numberOfItems = shoppingCart.length

  console.log(numberOfItems)
  Product.find({ _id: { $in: shoppingCart } })
    .then((response) => {
      res.render("cart", { products: response, numberOfItems })
    })
    .catch((error) => console.log(`Error fetching products from DB: ${error}`))
})

// POST PRODUCT PAGE BUY BUTTON

router.post("/product/:productID", (req, res, next) => {
  const { productID } = req.params
  let user = req.session.currentUser
})

module.exports = router
