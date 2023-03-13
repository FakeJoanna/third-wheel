const mongoose = require("mongoose")
const Product = require("../models/Product.model")

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/third-wheel"

const products = [
  {
    name: "Blue Cortina Bike Woman",
    brand: "Cortina",
    model: "U1",
    description: "Description 1",
    price: 50,
    image:
      "https://bikefair.org/bikes/11cbcac8-c6b3-4b85-bb77-90ccb4f8a495/blue-cortina-u1https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
    condition: "Used",
    isSold: false,
    specifications: {
      frameSize: "57cm",
      motorType: "Electric",
      batteryCapacity: "250",
      wheelsSize: "Fat Bike",
      maxSpeed: "25",
      range: "50",
      gears: "1",
    },
  },
]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`)

    return Product.create(products)
  })
  .then((productsFromDB) => {
    console.log(`Created ${productsFromDB.length} prdocuts`)

    return mongoose.connection.close()
  })
  .then(() => {
    console.log("DB connection closed!")
  })
  .catch((error) => console.log("An error ocurred: ", error))
