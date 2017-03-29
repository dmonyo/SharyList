angular.module('homeModule', [])

.controller('HomeCtrl', ['$scope', function ($scope) {

	$scope.shoppingList = [
		{completed:false, description: "Milk", group: 'common'},
		{completed:false, description: " Chicken", group: 'common'},
		{completed:false, description: "Pork", group: 'common'},
		{completed:false, description: "Condiments", group: 'common'},
		{completed:false, description: "Cleaning Stuff", group: 'common'},
		{completed:false, description: "Bounty", group: 'common'},
		{completed:false, description: "Tooth Paste", group: 'David'},
		{completed:false, description: "Tomato Sauce", group: 'common'},
		{completed:false, description: "Pasta", group: 'common'},
		{completed:false, description: "Peanuts", group: 'common'},
		{completed:false, description: "Ice cream", group: 'common'},
		{completed:false, description: "Deodorant", group: 'common'},
		{completed:false, description: "Cream cheese", group: 'common'},

	];

	//alert("noajbvaodbvjadbvdf");
	
}])