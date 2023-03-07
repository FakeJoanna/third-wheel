const { Schema, model } = require("mongoose");


const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: false
        },
        model: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        condition: {
            type: String,
            required: true
        },
        isSold: {
            type: Boolean,
            required: true
        },
        specifications: {
            frameSize:{type: Number},
            motorType: {type: String}, 
            batteryCapacity:{type: String}, 
            wheelsSize: {type: Number}, 
            maxSpeed: {type: Number}, 
            range: {type: Number}, 
            gears: {type: Number}, 
        }
    },
    {
        timestamps: true
    }
)

const Product = model("Product", productSchema);

module.exports = Product;
