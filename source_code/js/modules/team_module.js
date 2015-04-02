var team_module = angular.module('team_module', ["team_service"]);

team_module.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/team_win_loss', {
        templateUrl: 'html/team1.html'
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


team_module.controller('team_controller', 
    function($log, $scope, performance) {
      $scope.startYear = "2014";
      $scope.endYear = "2014";
      $scope.selectedTeams = [];
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
        //console.log(teams);
        //$scope.fetchData();
      };
      $scope.fetchDataService = performance.getTeamPerformances;
      $scope.drawChart = function(){
        drawLineChart($scope.data,'chart_div','Team performance');
        drawTable($scope.data,'table_div');
      }
  });

