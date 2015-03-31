var salariesControllers = angular.module('salaries_controller', ["salaries_service"]);

salariesControllers.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/players_salary', {
        templateUrl: 'html/salaries.html'
      })
      // .
      // when('/city', {
      //   templateUrl: 'html/players.html'
      // }).
      // when('/school', {
      //   templateUrl: 'html/salaries.html'
      // }).
      // when('/country', {
      //   templateUrl: 'html/support.html'
      // })
  }]);

salariesControllers.controller('player_salaries_controller', 
    function($log, $scope, salary) {
       $scope.drawChart = function(){
          drawPieChart($scope.data,'core_div','Salary');
        }
        var promise = salary.getPlayerSalaries();
        promise.then(
          function(payload) { 
              console.log(payload.data);
              $scope.data = payload.data;
              $scope.drawChart();
          },
          function(errorPayload) {
              $log.error('failure loading movie', errorPayload);
          });
  });