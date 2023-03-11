const mongoose = require('mongoose');
const Product = require("../models/Product.model");

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/third-wheel';

const products = [
    {
    name: "Product 1",
    brand: "Brand 1",
    model: "Model 1",
    description: "Description 1",
    price: 50,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
    condition: "New",
    isSold: false,
    specifications: {
        frameSize: 20,
        motorType: "Electric",
        batteryCapacity: 250,
        wheelsSize: "Fat Bike",
        maxSpeed: 25,
        range: 50,
        gears: 1
    }
    }
]



mongoose
    .connect(MONGO_URI)
    .then(x => {
        console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

        return Product.create(products);
    })
    .then((productsFromDB) => {
        console.log(`Created ${productsFromDB.length} prdocuts`);

        return mongoose.connection.close();
    })
    .then(() => {
        console.log('DB connection closed!');
    })
    .catch(error => console.log("An error ocurred: ", error));
