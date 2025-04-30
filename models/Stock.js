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
    trim: true,
    required: true,
  },
tproduct: {
        type: String,
        trim: true,
        required: true,
    },
qproduct: {
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
