var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
 serviceType: {
 	type: String
 },
 quantity: {
 	type: String
 },
 totalPrice: {
 	type: String
 },
 // delievered: {
 // 	type:Boolean,
 // 	default:false
 // },
 fullName:String,
 address:String,
 phoneNumber:Number,
 orderDate:{
 	type:Date,
 	default:12/3/2015
 }
});



module.exports = mongoose.model('orders', OrderSchema);
