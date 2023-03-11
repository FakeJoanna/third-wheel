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
            frameSize:{type: String},
            motorType: {type: String}, 
            batteryCapacity:{type: String}, 
            wheelsSize: {type: String}, 
            maxSpeed: {type: String}, 
            range: {type: String}, 
            gears: {type: String}, 
        }
    },
    {
        timestamps: true
    }
)


productSchema.index({ text:'text' })
const Product = model("Product", productSchema);

module.exports = Product;
