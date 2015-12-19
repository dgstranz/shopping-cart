var myApp = angular.module('myApp', ['ngRoute', 'myAppHome']);


myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './components/home/homeView.html',
			controller: 'homeController'
		})
		.when('/product/:id', {
			templateUrl: './components/detail/detailView.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}])
