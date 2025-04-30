const mongoose = require("mongoose");
const saleSchema = new mongoose.Schema({
  pname: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stock",
  },
  tproduce: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stock",
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Signup",
  },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stock",
  },
  paymentMethod: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Sale", saleSchema);
