var salaries_service  = angular.module('salaries_service', []);

salaries_service.factory('salary', function($http) {
    return {
      getTeamSalaries: function(teams,startYear,endYear) {
      	var promise = $http.get(global.end_points.base_url+global.end_points.salaries.players+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
        return promise;
      },
       searchPlayer: function(key,startYear,endYear) {
      	var promise = $http.get(global.end_points.base_url+global.end_points.player_search+
          '?key='+key+'&startYear='+startYear+'&endYear='+endYear);
        return promise;
      }
    }
  });