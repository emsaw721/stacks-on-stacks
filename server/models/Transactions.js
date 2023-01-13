const { Schema, model } = require('mongoose');

const transactionSchema = new Schema(
  {
    user: {
        required: true,
        type:String,
    },
    amount: {
      type: Number,
      required: true,
    },
    maincategory:{
        required: true,
        type:String,
    },
    secondcategory:{
        required: true,
        type:String,
    },
    categoryNote:{
        type: String
    },
    location:{
        type: String,   
    },
    note: {
        type: String
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const Transactions = model('Transactions', transactionSchema);

module.exports = Transactions;