var productComponent = angular.module('productComponent', ['myServices']);

productComponent.directive('product', ['productService', function(productService) {
	return {
		restrict: 'E',
		templateUrl: 'components/productComponent/productComponentView.html',
		scope: {
			info: '='
		},
		link: function(scope, elem, attrs) {
			scope.addProductToCart = function(productId) {
				productService.addProductToCart(productId);
			}
		}
	}
}]);
