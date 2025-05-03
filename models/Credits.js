const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema({
  buyerName: {
    type: String,
    required: true,
    trim: true
  },
  nationalId: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  contacts: {
    type: String,
    required: true,
    minlength: 9
  },
  amountDue: {
    type: Number,
    required: true,
  },
  salesAgent: {
    type: String,
    required: true,
    trim: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  produceName: {
    type: String,
    required: true,
    trim: true
  },
  produceType: {
    type: String,
    required: true,
    trim: true
  },
  tonnage: {
    type: Number,
    required: true,
    min: 0.01
  },
  dispatchDate: {
    type: Date,
    required: true
  },
  recordedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Credit', creditSchema);
