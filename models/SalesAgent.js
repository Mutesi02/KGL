const mongoose = require("mongoose");

const salesAgentSchema = new mongoose.Schema({
  agentName: {
    type: String,
    trim: true,
    required: true,
  },
  saleType: {
    type: String, // 'cash' or 'credit'
    trim: true,
    required: true,
  },
  produceName: {
    type: String,
    trim: true,
    required: true,
  },
  quantitySold: {
    type: Number,
    trim: true,
    required: true,
  },
  salePricePerKg: {
    type: Number,
    trim: true,
    required: true,
  },
  totalAmount: {
    type: Number,
    trim: true,
    required: true,
  },
  buyerName: {
    type: String,
    trim: true,
    required: true,
  },
  buyerContact: {
    type: String,
    trim: true,
    required: true,
  },
  paymentStatus: {
    type: String, // 'paid' or 'pending'
    trim: true,
    required: true,
  },
  saleDate: {
    type: Date,
    required: true,
  },
  branch: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("SalesAgent", salesAgentSchema);
