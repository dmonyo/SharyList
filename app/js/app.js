
var app = angular.module('SharyApp', ["ngRoute", "homeModule"]);

app.config(['$routeProvider',function($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'app/views/shopping/list.html',
		controller: 'HomeCtrl'
	})
	.when('/additem', {
		templateUrl: 'app/views/shopping/add.html',
		//controller: 'HomeCtrl'
	})
	.otherwise({ 
		redirectTo: '/' 
	});
	
}])