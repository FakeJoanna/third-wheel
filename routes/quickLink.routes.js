const express = require('express');
const router = express.Router();
const Product = require("../models/Product.model");
const { isLoggedIn } = require('../utils/middleware/middleware.js');

// GET quick link, numbers
router.get("/qL", (req, res, next) => {
    const query = req.query.qL;
    const regex = new RegExp(req.query.qL, "i");

    let filter;

    switch(query) {
        case "New":
        case "Fat Bike":
            filter = { $or: [{ "specifications.wheelsSize": regex }, { condition: regex }] }
            break;
        case "100":
            filter = { price: { $lt: 100 } };
            break;
        case "1":
            filter = { "specifications.gears": 1 }
            break;
        case "250":
            filter = { "specifications.batteryCapacity": 250 }
            break;
    }

    function findProducts() {
        Product.find(filter)
        .then(response => {
            res.render("search", {data: response, userInSession: req.session.currentUser});
        });
    };

    findProducts();
})

module.exports = router;