var team_service  = angular.module('team_service', []);

team_service.factory('performance', function($http) {
    return {
      getTeamPerformances: function() {
      	var promise = $http.get(global.end_points.base_url+global.end_points.teams.performance);
      	promise.then(function(data){
      		console.log("here");
      		return data;
      	});
        return promise;
      }
    }
  });