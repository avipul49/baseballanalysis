var salaries_service  = angular.module('salaries_service', []);

salaries_service.factory('salary', function($http) {
    return {
      getPlayerSalaries: function() {
      	var promise = $http.get(global.end_points.base_url+global.end_points.salaries.players);
      	promise.then(function(data){
      		console.log("here");
      		return data;
      	});
        return promise;
      }
    }
  });