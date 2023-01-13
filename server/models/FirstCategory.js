const { Schema, model } = require('mongoose');
const secondCategorySchema = require("./SecondCategory")
const secondCategorySchema = require("./SecondCategory")

const firstCategorySchema = new Schema(
  {
    firstCategory: {
        required: true,
        type:String,
    },
    secondCategory:[secondCategorySchema]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const FirstCategory = model('Transactions', firstCategorySchema);

module.exports = FirstCategory;