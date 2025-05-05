const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  totalRevenue: {
    type: Number,
    trim: true,
    default: 0
  },
  outstandingCredit: {
    type: Number,
    trim: true,
    default: 0
  },
  totalTonsSold: {
    type: Number,
    trim: true,
    default: 0
  },
  totalTransactions: {
    type: Number,
    trim: true,
    default: 0
  },
  salesByProduce: [
    {
      produceName: {
        type: String,
        trim: true
      },
      tonsSold: {
        type: Number,
        trim: true,
        default: 0
      },
      revenue: {
        type: Number,
        trim: true,
        default: 0
      }
    }
  ],
  branchPerformance: [
    {
      branchName: {
        type: String,
        trim: true
      },
      branchRevenue: {
        type: Number,
        trim: true,
        default: 0
      },
      branchTonsSold: {
        type: Number,
        trim: true,
        default: 0
      }
    }
  ],
  dateGenerated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Director", directorSchema);
