var salariesControllers = angular.module('salaries_controller', ["salaries_service"]);

salariesControllers.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/team_salary', {
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
    function($log, $scope, salary, $location) {
      $scope.categories = [{link:'team_salary',label:'Players',active:true},
                          {link:'salary_win_loss',label:'Win/loss'}];
      $scope.fields = [];

      $scope.field = '';
      $scope.title='Player salaries';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        console.log(payload);
        $scope.data = parseSalaryData(payload);
      };
      $scope.fetchDataService = salary.getPlayerSalaries;
      $scope.drawChart = function(){
        drawPieChart($scope.data,'chart_div','Salary');
        drawTable($scope.data,'table_div');
      }
  });