const express = require("express")
const router = express.Router()
const Product = require("../models/Product.model")
const { isLoggedOut, isLoggedIn } = require("../utils/middleware/middleware.js")
const fileUploader = require("../config/cloudinary.config")

// GET FORM PAGE

router.get("/new-listing", isLoggedIn, (req, res, next) => {
  {
    try {
      res.render("newlisting", { userInSession: req.session.currentUser })
    } catch {
      console.log(`Error while getting new listings page: ${error}`)
    }
  }
})

// POST CREATE PRODUCT

router.post("/new-listing", fileUploader.array("image"), isLoggedIn, (req, res, next) => {
  req.body.image = []
  console.log(req.body)
  req.files.forEach((element) => {
    req.body.image.push(element.path)
  })

  Product.create(req.body)
    .then((newProduct) => {
      res.redirect(`/product/${newProduct._id}`)
    })
    .catch((error) => console.log(`Error while creating a new product: ${error}`))
})

// GET PRODUCT DETAILS

router.get("/product/:productID", isLoggedIn, (req, res, next) => {
  const { productID } = req.params

  Product.findById(productID)
    .then((product) => {
      res.render("product", { product, userInSession: req.session.currentUser })
    })
    .catch((error) => console.log(`Error while creating a new productID page: ${error}`))
})

//GET EDIT PRODUCT PAGE

router.get("product/:productID/edit", (req, res, next) => {
  const productID = req.params
  res.render("editpage")
})

//
/*router.get("/product/productID/edit", isLoggedIn, (req, res, next) => {
  const { productID } = req.params
  Product.findByIdAndUpdate(productID)
    .then((product) => {
      res.redirect("/product/:productID", { product, userInSession: req.session.currentUser })
    })
    .catch((error) => console.log(`Error while editing the product: ${error}`))
})*/

// POST DELETE PRODUCT
router.post("/allListings", isLoggedIn, (req, res, next) => {
  const id = req.body.id
  Product.findByIdAndDelete(id)
    .then((response) => {
      res.redirect("/allListings")
    })
    .catch((error) => console.log(`Error deleting product: ${error}`))
})

// ALL LISTINGS PAGE GET

router.get("/allListings", isLoggedIn, (req, res, next) => {
  const postedBy = req.session.currentUser._id

  Product.find({ postedBy: postedBy })
    .then((response) => {
      console.log(response)
      res.render("allListings", { response })
    })
    .catch((error) => console.log(`Error while getting all listings page: ${error}`))
})

module.exports = router
