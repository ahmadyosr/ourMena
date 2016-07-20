var mongoose = require('mongoose');
var crypto = require('crypto');

var OrderSchema = new mongoose.Schema({
 type: String,
 quantity: Number,
 username: String,
 totalPrice:Number
});



module.exports = mongoose.model('orders', OrderSchema);
