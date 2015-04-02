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
      $scope.onSelectionChange = function(payload,teams,startYear,endYear){
        $scope.selectedTeams = teams;
        $scope.startYear = startYear;
        $scope.endYear = endYear;
        console.log(teams);
        console.log(startYear);
        console.log(endYear);

        $scope.data = payload.data;
        if(global.charts_loaded){
          $scope.drawChart();
        }else{
          loadCharts($scope.drawChart);
        }    
      };
    $scope.fetchDataService = salary.getPlayerSalaries;
     $scope.drawChart = function(){
        drawPieChart($scope.data,'core_div','Salary');
    }
  });