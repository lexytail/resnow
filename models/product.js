var mongo = require('mongoose');
var Schema = mongo.Schema;

var schema = new Schema({
	img: {type: String, required: true},
	title: {type: String, required: true},
	description: {type: String, required: true},
	price: {type: Number, required: true},
});

module.exports = mongo.model('Product', schema);