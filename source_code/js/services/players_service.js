var players_service  = angular.module('players_service', []);

players_service.factory('origin', function($http) {
    return {
      getPlayerOrigin: function() {
      	var promise = $http.get(global.end_points.base_url+global.end_points.players.origin);
      	promise.then(function(data){
      		console.log("here");
      		return data;
      	});
        return promise;
      }
    }
  });