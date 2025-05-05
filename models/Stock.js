const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  pname: {
    type: String,
    trim: true,
    required: true,
  },
  tproduce: {
    type: String,
    trim: true,
    required: true,
  },
  dproduct: {
    type: Date,
    required: true,
  },
  tproduct: {
    type: String,
    trim: true,
    required: true,
  },
  qproduct: {
    type: Number,
    required: true,
  },
  uprice: {
    type: Number,
    required: true,
  },
  tamount: {
    type: Number,
    required: true,
  },
  supplierName: {
    type: String,
    trim: true,
    required: true,
  },
  supplierContact: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
  },
  branch: {
    type: String,
    trim: true,
  },
  paymentMethod: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Stock", stockSchema);
