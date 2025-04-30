const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  totalRevenue: {
    type: Number,
    trim: true,
    required: true,
  },
  outstandingCredit: {
    type: Number,
    trim: true,
    required: true,
  },
  totalTonsSold: {
    type: Number,
    trim: true,
    required: true,
  },
  totalTransactions: {
    type: Number,
    trim: true,
    required: true,
  },
  salesByProduce: [
    {
      produceName: {
        type: String,
        trim: true,
        required: true,
      },
      tonsSold: {
        type: Number,
        trim: true,
        required: true,
      },
      revenue: {
        type: Number,
        trim: true,
        required: true,
      },
    },
  ],
  branchPerformance: [
    {
      branchName: {
        type: String,
        trim: true,
        required: true,
      },
      branchRevenue: {
        type: Number,
        trim: true,
        required: true,
      },
      branchTonsSold: {
        type: Number,
        trim: true,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Director", directorSchema);
