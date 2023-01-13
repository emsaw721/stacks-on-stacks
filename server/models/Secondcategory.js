const { Schema, model } = require('mongoose');

const secondCategorySchema = new Schema(
  {
    secondCategory: {
        required: true,
        type:String,
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const SecondCategory = model('Transactions', secondCategorySchema);

module.exports = SecondCategory;