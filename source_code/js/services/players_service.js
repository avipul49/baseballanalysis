var players_service  = angular.module('players_service', []);

players_service.factory('origin', function($http) {
    return {
      getPlayerOrigin: function(teams,startYear,endYear) {
      	var promise = $http.get(global.end_points.base_url+global.end_points.players.origin+"?teams=CHN,NYN,HOU&startYear=2014&endYear=2014");
      	promise.then(function(data){
      		console.log("here");
      		return data;
      	});
        return promise;
      },
      getPlayerBirthCountryStats: function(teams,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.player_birth_country_stats+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
       
        return promise; 
      },
      getPlayerBirthStateStats: function(teams,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.player_birth_state_stats+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
       
        return promise; 
      },
      getPlayerBirthCityStats: function(teams,startYear,endYear){
        var promise = $http.get(global.end_points.base_url+global.end_points.players.player_birth_city_stats+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
      
        return promise; 
      }
    }
  });