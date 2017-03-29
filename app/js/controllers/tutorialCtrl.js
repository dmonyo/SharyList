

angular.module('tutorialCtrlModule', [])

.controller('TutorialCtrl', ['$scope', 'Calculations', function ($scope, Calculations) {

	//alert("Hello world");

	// $scope variables example

	$scope.tutorialObject = [];
	$scope.tutorialObject.title = "My fist data in angularjs";
	$scope.tutorialObject.subTitle = "Its incredible how it works!!";
	$scope.tutorialObject.bindOutput = 2;

	// $scope functions example

	$scope.value = 1;	


	$scope.timesTwo = function(){
		$scope.value = Calculations.timesTwo($scope.value);
	};

	
	
	


}])

.controller('Tutorial2Ctrl', ['$scope', function ($scope) {

	$scope.firstName = "David";
	$scope.lastName = "Moreno Martinez";
	$scope.a = 1;
	$scope.b = 2;
	$scope.res = Calculations.pythagoreanTheorum($scope.a, $scope.b);

	$scope.getPythagoreanTheorum = function(){

		$scope.res = Calculations.pythagoreanTheorum($scope.a, $scope.b);
	};

	
}])


.factory('Calculations', [function () {
	
	var calculations = {

		timesTwo: function(a){

			return a * 2;
		},
		pythagoreanTheorum: function(a, b) {

			if (a == '' || b == '') 
				return "Impoible to make Pythagoras";

			return Math.sqrt((a * a) + (b * b));
		}
	};

	return calculations;
}])

/*.directive('welcomeMessage', [function () {
	return {
		restrict: 'E',
		template: "<div>Howdy, How are you?</div>",
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}])*/
/*.directive('welcomeMessage', [function () {
	return {
		restrict: 'A',
		template: "<div>Howdy, How are you?</div>",
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}])*/
.directive('welcomeMessage', [function () {
	return {
		restrict: 'AE',
		template: "<div>Howdy, How are you?</div>",
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}])
