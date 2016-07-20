var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
 serviceType: {
 	type: String
 },
 quantity: {
 	type: String
 },
 username: {
 	type: String
 },
 totalPrice: {
 	type: String
 }
});



module.exports = mongoose.model('orders', OrderSchema);
