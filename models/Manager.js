const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
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
sprice: {
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
paymentMethod: {
            type: String,
            trim: true,
            required: true,
    }, 
});

module.exports = mongoose.model("Manager", managerSchema);
