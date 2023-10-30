const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const transactionSchema = new Schema(
  {
    username: {
      type: String,
      required:true
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    yearmonth:{
      type: String,
      required:false,
    },
    firstcategory:{
        required: true,
        type:String,
    },
    secondcategory:{
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