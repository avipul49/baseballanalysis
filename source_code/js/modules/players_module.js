var playersControllers = angular.module('players_controller', ["players_service"]);

playersControllers.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/state', {
        templateUrl: 'html/players.html',
        controller:"team_controller"

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
    function($log, $scope, origin) {
      $scope.drawChart = function(){
        drawMap($scope.data,'geo_div','Player origin');
      }
      var promise = origin.getPlayerOrigin();
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