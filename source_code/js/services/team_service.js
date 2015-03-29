var team_service  = angular.module('team_service', []);

team_service.factory('performance', function($http) {
    return {
      getMovie: function() {
      	console.log("vdfvdf");
        return $http.get('http://localhost:8888/baseballanalysis_backend/getData.php');
      }
    }
  });