var myAppHome = angular.module('myAppHome', ['myServices', 'productComponent']);

myAppHome.controller('homeController', ['$scope', 'productService', function($scope, productService) {
	$scope.productList = productService.products;
	$scope.addProductToCart = function(product) {
		productService.addProductToCart(product);
	};
}]);