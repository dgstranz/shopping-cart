var myServices = angular.module('myServices', []);

myServices.service('productService', function() {
	this.products = [{
		id: 1,
		name: "mouse",
		brand: "HP",
		image: "hp-mouse.jpg",
		description: "Red Z4000 wireless mouse",
		features: {
			wireless: "yes",
			color: "red"
		},
		price: 30.00
	},
	{
		name: "monitor",
		brand: "Philips",
		image: "",
		price: 180.00
	},
	{
		name: "monitor",
		brand: "Philips",
		image: "",
		price: 180.00
	},
	{
		name: "monitor",
		brand: "Philips",
		image: "",
		price: 180.00
	},
	{
		name: "monitor",
		brand: "Philips",
		image: "",
		price: 180.00
	},
	{
		name: "monitor",
		brand: "Philips",
		image: "",
		price: 180.00
	},
	{
		name: "monitor",
		brand: "Philips",
		image: "",
		price: 180.00
	},
	{
		name: "monitor",
		brand: "Philips",
		image: "",
		price: 180.00
	},
	{
		name: "monitor",
		brand: "Philips",
		image: "",
		price: 180.00
	},
	{
		name: "monitor",
		brand: "Philips",
		image: "",
		price: 180.00
	}];

	this.addProductToCart = function(product) {
		console.log(product);
	};
})