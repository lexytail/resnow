var Product = require('../models/product');
var mongo = require('mongoose');

mongo.connect('localhost:27017/shop');

var products = [
	new Product({
		img: 'http://placehold.it/350x250',
		title: 'Place',
		description: 'Golda',
		price: 20}),

	new Product({
		img: 'http://placehold.it/350x250',
		title: 'Nimba',
		description: 'Fast',
		price: 20}),

	new Product({
		img: 'http://placehold.it/350x250',
		title: 'Darw',
		description: 'Prof',
		price: 20}),

	new Product({
		img: 'http://placehold.it/350x250',
		title: 'JGND',
		description: 'WAEAWE',
		price: 20}),

	new Product({
		img: 'http://placehold.it/350x250',
		title: 'PSADAD',
		description: 'Gasdsw',
		price: 20})];
let done=0;
for (let i = 0; i < products.length; i++) {
	products[i].save();
	done===products.length-1 ? mongo.disconnect() : done++;
}

