var manager_service  = angular.module('manager_service', []);

manager_service.factory('manager', function($http) {
    return {
      getManagerAgeMaturity: function(teams,startYear,endYear) {
      	var promise = $http.get(global.end_points.base_url+global.end_points.managers.manager_age_maturity+
          '?teams='+teams+'&startYear='+startYear+'&endYear='+endYear);
      	alert(promise);
        return promise;
      }
    }
  });