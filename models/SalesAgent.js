const mongoose = require('mongoose');

const salesAgentSchema = new mongoose.Schema({
  agentName: {
    type: String,
    trim: true,
    required: true,
  },
  saleType: {
    type: String,
    enum: ['cash', 'credit'],
    required: true,
  },
  produceName: {
    type: String,
    trim: true,
    required: true,
  },
  produceType: {
    type: String,
    trim: true,
    required: true,
  },
  quantitySold: {
    type: Number,
    required: true,
  },
  salePricePerKg: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
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
    type: String,
    enum: ['paid', 'pending'],
    required: true,
    default: function () {
      return this.saleType === 'cash' ? 'paid' : 'pending';
    }
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'mobile money', 'bank', 'credit'],
    default: 'cash'
  },
  saleDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  branch: {
    type: String,
    trim: true,
    required: true,
  },
  dueDate: {
    type: Date,
    required: function () {
      return this.saleType === 'credit';
    },
  },
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

// Automatically calculate totalAmount
salesAgentSchema.pre('save', function (next) {
  this.totalAmount = this.quantitySold * this.salePricePerKg;
  next();
});

module.exports = mongoose.model('SalesAgent', salesAgentSchema);
