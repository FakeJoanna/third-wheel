const express = require("express")
const router = express.Router()
const Product = require("../models/Product.model")
const { isLoggedOut, isLoggedIn } = require("../utils/middleware/middleware.js")
const fileUploader = require("../config/cloudinary.config")

// GET FORM PAGE

router.get("/new-listing", isLoggedIn, (req, res, next) => {
  res.render("newlisting", { userInSession: req.session.currentUser })
})

// POST CREATE PRODUCT

router.post("/new-listing", fileUploader.array("image"), (req, res, next) => {
  req.body.image = []

  req.files.forEach((element) => {
    req.body.image.push(element.path)
  })

  Product.create(req.body)
    .then((newProduct) => {
      res.redirect(`/product/${newProduct._id}`)
    })
    .catch((error) => console.log(`Error while creating a new product: ${error}`))
})

// GET listed products
router.get("/product/:productID", isLoggedIn, (req, res, next) => {
  const { productID } = req.params

  Product.findById(productID)
    .then((product) => {
      console.log(product)
      res.render("product", { product, userInSession: req.session.currentUser })
    })
    .catch((error) => console.log(`Error while creating a new productID page: ${error}`))
})

// POST EDIT PRODUCT

// POST DELETE PRODUCT

// GET PRODUCT DETAILS
module.exports = router
