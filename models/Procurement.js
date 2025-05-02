const mongoose = require('mongoose');

const procurementSchema = new mongoose.Schema({
  Pname: {
    type: String,
    required: true,
  },
  Tproduce: {
    type: String,
    required: true,
  },
  Dprocurement: {
    type: Date,
    required: true,
  },
  Tprocurement: {
    type: String, 
    required: true,
  },
  tonnage: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  dealerName: {
    type: String,
    required: true,
  },
  dealerContact: {
    type: String,
    required: true,
  },
  branchName: {
    type: String,
    enum: ['Maganjo', 'Matugga'],
    required: true,
  },
  Psold: {
    type: Number,
    required: true,
  }
},
 { timestamps: true }
);

module.exports = mongoose.model('Procurement', procurementSchema);
