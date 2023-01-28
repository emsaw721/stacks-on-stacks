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



const FirstCategory = model('FirstCategory', firstCategorySchema);


module.exports = FirstCategory;