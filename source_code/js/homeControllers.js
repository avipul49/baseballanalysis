var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('registerEmail', ['$scope', '$http',
  function ($scope, $http) {

  	console.log('fd');
  	function register(){
  		console.log('fd');
  		console.log($scope.emailForm.input.$valid);
  		alert($scope.email.text);
	    // $http.get('phones/phones.json').success(function(data) {
	    //   $scope.phones = data;
	    // });
	}

    $scope.register = register;
  }]);

