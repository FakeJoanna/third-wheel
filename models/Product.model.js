const { Schema, model } = require("mongoose")

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: [
      {
        type: String,
        required: true,
      },
    ],
    condition: {
      type: String,
      required: true,
    },
    isSold: {
      type: Boolean,
      required: true,
      default: false,
    },
    specifications: {
      frameSize: { type: String },
      motorType: { type: String },
      batteryCapacity: { type: String },
      wheelsSize: { type: String },
      maxSpeed: { type: String },
      range: { type: String },
      gears: { type: String },
    },
    postedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
)

productSchema.index({ text: "text" })
const Product = model("Product", productSchema)

module.exports = Product
