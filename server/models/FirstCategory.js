const { Schema, model } = require('mongoose');
const secondCategorySchema = require("./SecondCategory")

const firstCategorySchema = new Schema(
  {
    firstCategory: {
        required: true,
        type:String,
    },
    secondCategory:[secondCategorySchema.schema]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);


<<<<<<< HEAD
const FirstCategory = model('FirstCategory', firstCategorySchema);
=======
const FirstCategory = model('Transactions', firstCategorySchema);
>>>>>>> e0331726 (index)

module.exports = FirstCategory;