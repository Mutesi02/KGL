const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
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
  dsale: {
    type: Date,
    trim: true,
    required: true,
  },
  tsale: {
    type: String,
    trim: true,
    required: true,
  },
  qsold: {
    type: Number,
    trim: true,
    required: true,
  },
  uprice: {
    type: Number,
    trim: true,
    required: true,
  },
  tamount: {
    type: Number,
    trim: true,
    required: true,
  },
  customerName: {
    type: String,
    trim: true,
    required: true,
  },
  customerContact: {
    type: String,
    trim: true,
    required: true,
  },
  seller: {
    type: String, // changed from ObjectId to String
    trim: true,
    required: true,
  },
  branch: {
    type: String, // changed from ObjectId to String
    trim: true,
    required: true,
  },
  paymentMethod: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Sale", saleSchema);
