const { Schema, model } = require('mongoose');

const secondCategorySchema = new Schema(
  {
    secondCategory: {
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


<<<<<<< HEAD
const SecondCategory = model('secondCategory', secondCategorySchema);
=======
const SecondCategory = model('Transactions', secondCategorySchema);
>>>>>>> e0331726 (index)

module.exports = SecondCategory;