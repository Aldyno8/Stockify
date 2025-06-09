const mongoose = require("mongoose");

const orderShema = mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  quantity :{
	type:Number,
	required:true,
  },
  price: {
	type:Number,
	required:true
  },
  total:{
	type:Number,
	required:true
  },
  status:{
	type:String,
	required:true
  },
  delivery_date:{
	type:Date,
	required:true 
  },
  created_at:{
	type : Date,
	default: Date.now()
  }
});

module.exports = mongoose.model("Order", orderShema)
