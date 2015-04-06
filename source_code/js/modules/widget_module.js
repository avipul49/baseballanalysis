var team_module = angular.module('widget_module', ["team_service"]);

team_module.controller('widget_controller', 
    function($log, $scope, performance,$location) {
      if(!$scope.selector){
        $scope.selector = 'team';
      }
      $scope.changeDisplay = function(field){
        if($scope.payload){
          console.log(field);
          $scope.parseData($scope.payload,$scope.selectedTeams,$scope.startYear,$scope.endYear,field);
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
    
  });

