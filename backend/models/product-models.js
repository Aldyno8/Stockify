const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    default: "",
  },
  category: {
    type: String,
  },
  subCategory: {
    type: String,
  },
  price: {
    type: Number,
  },
  stockQuantity: {
    type: Number,
  },
  alertThreshold: {
    type: Number,
    default : 10
  },
  unit: {
    type: String,
  },
  expirationDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
