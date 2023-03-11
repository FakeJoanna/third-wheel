const mongoose = require('mongoose');
const Product = require("../models/Product.model");

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/third-wheel';

const products = [
    {
    name: "Product 1",
    brand: "Brand 1",
    model: "Model 1",
    description: "Description 1",
    price: 100,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
    condition: "New",
    isSold: false,
    specifications: {
        frameSize: 20,
        motorType: "Electric",
        batteryCapacity: "10Ah",
        wheelsSize: 26,
        maxSpeed: 25,
        range: 50,
        gears: 21
    }
    },
    {
    name: "Product 2",
    brand: "Brand 2",
    model: "Model 2",
    description: "Description 2",
    price: 200,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
    condition: "Used",
    isSold: false,
    specifications: {
        frameSize: 18,
        motorType: "Electric",
        batteryCapacity: "8Ah",
        wheelsSize: 27.5,
        maxSpeed: 30,
        range: 40,
        gears: 24
    }
    },
    {
    name: "Product 3",
    brand: "Brand 3",
    model: "Model 3",
    description: "Description 3",
    price: 300,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
    condition: "New",
    isSold: false,
    specifications: {
        frameSize: 19,
        motorType: "Electric",
        batteryCapacity: "12Ah",
        wheelsSize: 29,
        maxSpeed: 20,
        range: 60,
        gears: 18
    }
    },
    {
    name: "Product 4",
    brand: "Brand 4",
    model: "Model 4",
    description: "Description 4",
    price: 400,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
    condition: "New",
    isSold: false,
    specifications: {
        frameSize: 21,
        motorType: "Electric",
        batteryCapacity: "14Ah",
        wheelsSize: 28,
        maxSpeed: 35,
        range: 70,
        gears: 27
    }
    },
    {
    name: "Product 5",
    brand: "Brand 5",
    model: "Model 5",
    description: "Description 5",
    price: 500,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
    condition: "Used",
    isSold: false,
    specifications: {
        frameSize: 20,
        motorType: "Electric",
        batteryCapacity: "10Ah",
        wheelsSize: 26,
        maxSpeed: 25,
        range: 50,
        gears: 21
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
