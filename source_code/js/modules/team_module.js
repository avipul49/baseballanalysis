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
    function($log, $scope, performance,$location) {
      $scope.field = 'wins';

      $scope.changeDisplay = function(field){
        if($scope.payload){
          console.log(field);
          $scope.data = parseTeamPerformanceData($scope.payload,$scope.selectedTeams,$scope.startYear,$scope.endYear,field);
          $scope.field =field;
          if(global.charts_loaded){
            $scope.drawChart();
          }else{
            loadCharts($scope.drawChart);
          } 
        }   
      }
      if(global.query){
        $location.search(global.query);
      }
      var query = $location.search();
      if(query.endYear){
        $scope.endYear = parseInt(query.endYear);
      }else{
        $scope.endYear = 2014
      }
      if(query.startYear){
        $scope.startYear = parseInt(query.startYear);
      }else{
        $scope.startYear = 2014
      }

      $scope.selectedTeams = [];

      $scope.onSelectionChange = function(payload,teams,startYear,endYear){
          $scope.selectedTeams = teams;
          $scope.startYear = startYear;
          $scope.endYear = endYear;
          $scope.payload = payload;
          $scope.changeDisplay($scope.field);
      };
      $scope.fetchDataService = performance.getTeamPerformances;
      $scope.drawChart = function(){
        drawLineChart($scope.data,'chart_div','Team performance');
        drawTable($scope.data,'table_div');
      }
  });

