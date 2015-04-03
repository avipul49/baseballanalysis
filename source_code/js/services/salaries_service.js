var salaries_service  = angular.module('salaries_service', []);

salaries_service.factory('salary', function($http) {
    return {
      getPlayerSalaries: function(teams,startYear,endYear) {
      	var promise = $http.get(global.end_points.base_url+global.end_points.salaries.players+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
        return promise;
      }
    }
  });