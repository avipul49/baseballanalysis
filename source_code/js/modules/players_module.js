var playersControllers = angular.module('players_controller', ["players_service"]);

playersControllers.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/state', {
        templateUrl: 'html/players.html'
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

playersControllers.controller('player_origin_controller', 
    function($log, $scope, origin,$location) {

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
          $scope.data = payload.data;
          if(global.charts_loaded){
            $scope.drawChart();
          }else{
            loadCharts($scope.drawChart);
          }    
        //console.log(teams);
        //$scope.fetchData();
      };
      $scope.fetchDataService = origin.getPlayerOrigin;
      $scope.drawChart = function(){
        drawMap($scope.data,'geo_div','Player origin');
      }
  });

playersControllers.controller('player_perfromace_controller', 
    function($log, $scope, origin) {
      $scope.drawChart = function(){
        drawMap($scope.data,'geo_div','Player origin');
      }
      var promise = origin.getPlayerPerformace();
      promise.then(
        function(payload) { 
            console.log(payload.data);
            $scope.data = payload.data;
            $scope.drawChart();
        },
        function(errorPayload) {
            console.log('failure loading movie'+errorPayload);
        });
  });