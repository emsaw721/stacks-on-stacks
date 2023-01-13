const { Schema, model } = require('mongoose');

const secondcategorySchema = new Schema(
  {
    secondcategory: {
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


const Secondcategory = model('Transactions', secondcategorySchema);

module.exports = Secondcategory;