const express = require("express")
const router = express.Router()
const Product = require("../models/Product.model")

router.get("/cart", (req, res) => {
  res.render("cart")
})
