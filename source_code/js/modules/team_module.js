var homeControllers = angular.module('homeControllers', ["team_service"]);

homeControllers.config(['$routeProvider',
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


homeControllers.controller('team_controller', 
    function($log, $scope, performance) {
      $scope.drawChart = function(){
        drawLineChart($scope.data,'chart_div','Team performance');
        drawTable($scope.data,'table_div');
      }
      var promise = performance.getTeamPerformances();
      promise.then(
        function(payload) { 
          $scope.data = payload.data;
          if(global.charts_loaded){
            $scope.drawChart();
          }else{
            loadCharts($scope.drawChart);
          }         
        },
        function(errorPayload) {
            $log.error('failure loading movie', errorPayload);
        });  
  });

