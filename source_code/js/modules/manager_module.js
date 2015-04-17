var managerControllers = angular.module('manager_controller', ["manager_service"]);

managerControllers.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/manager_win_loss', {
        templateUrl: 'html/widget.html',
        controller : 'manager_age_perf_controller',
        reloadOnSearch: false
      })
  }]);

managerControllers.controller('manager_age_perf_controller', 
    function($log, $scope, manager, $location) {
      $scope.categories = [{link:'manager_win_loss',label:'Win/Loss',active:true},
                          {link:'award_achievements',label:'Awards & Achievements'}];
      $scope.fields = [{field:0,label:'Wins',active:true},
                          {field:1,label:'Losses'},
                          {field:2,label:'Games Managed'}];

      $scope.field = 0
      $scope.title='Manager Age vs Performance';
      $scope.parseData = function(payload,selectedTeams,startYear,endYear,field){
        console.log(payload);
        $scope.data = parsePlayerAttributeData(payload,'Weight',field,$scope.fields[$scope.field].label);
      };
      $scope.fetchDataService = manager.getManagerAgeMaturity;
      $scope.drawChart = function(){
        console.log($scope.data);
        drawBarChart($scope.data,'chart_div',$scope.title,'');
        drawTableWithArray($scope.data,'table_div');
      }
  });

