const express = require("express")
const router = express.Router()
const Product = require("../models/Product.model")

// GET CART ROUTE

router.get("/cart", (req, res) => {
  res.render("cart", { userInSession: req.session.currentUser })
})

// POST CART ROUTE

router.post("/cart", (req, res) => {
  let { shoppingCart } = req.body
  shoppingCart = JSON.parse(shoppingCart)
  
  numberOfItems = shoppingCart.length

  const query = shoppingCart.map(id => ({ _id: id }))
  console.log(query)

  Product.find({ $or: query })
    .then((response) => {
      const products = shoppingCart.map(id => {
        return response.find(product => product._id.toString() === id.toString())
      })
      res.render("cart", { products, numberOfItems, userInSession: req.session.currentUser })
    })
    .catch((error) => console.log(`Error fetching products from DB: ${error}`))
})

module.exports = router
