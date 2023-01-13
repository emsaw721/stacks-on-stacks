const { Schema, model } = require('mongoose');
const secondcategorySchema = require("./Secondcategory")

const firstcategorySchema = new Schema(
  {
    category: {
        required: true,
        type:String,
    },
    secondcategory:[secondcategorySchema]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const Firstcategory = model('Transactions', firstcategorySchema);

module.exports = Firstcategory;