var filterModule = angular.module('filter_module', []);

function fetchData($scope){
  var teamids = [];
  if($scope.selectedTeams[0]){
    for(var team in $scope.selectedTeams){
      var currentTeam = $scope.selectedTeams[team];
      teamids.push(currentTeam.teamId);
    }
    var promise = $scope.fetchDataService(teamids,$scope.startYear,$scope.endYear);
    promise.then(
    function(payload) { 
      $scope.onSelectionChange(payload,$scope.selectedTeams,$scope.startYear,$scope.endYear);        
    },
    function(errorPayload) {
        $log.error('failure loading ', errorPayload);
    }); 
    console.log($scope.selectedLeagues);
  }
};

filterModule.directive('myRepeatDirective', function() {
  return function(scope, element, attrs) {
    angular.element(element).css('color','blue');
    if (scope.$last){
      window.alert("im the last!");
       for (var selector in config) {
      $(selector).chosen(config[selector]);
    }
    }
  };
});

filterModule.controller('team_filter_controller', 
  function($scope) {
    $scope.allLeagues=global.leagues;
    $scope.onLeagueChange = function( data ) {  
        var teams = [];
        var i=0;
        for(var team in global.teams){
          var currentTeam = global.teams[team];
          var found = false;
          for(var league in $scope.selectedLeagues){
            if($scope.selectedLeagues[league].lgId == currentTeam.lgId){
              found = true;
              break;
            }
          }
          if(found){
            teams[i] = global.teams[team];
            i++;
          }
        }
        $scope.teams = teams;
    }  
    console.log("filter");
    $scope.onChange = function(teams){
      $scope.selectedTeams = teams;
      fetchData($scope);
    }
  });
filterModule.controller('year_filter_controller', 
  function($scope) {
      $scope.startYearRange = [];
      for(var i=2014;i>1960;i--) {
        $scope.startYearRange.push(i);
      }
      $scope.endYearRange = [2014];

      $scope.startYearChange = function(){
        updateEndDateRange();
        fetchData($scope);
      };
      $scope.endYearChange = function(){
        fetchData($scope);
      };
      function updateEndDateRange(){
        if($scope.endYear<$scope.startYear)
          $scope.endYear = $scope.startYear;
        var range = [];
        for(var i=2014;i>=$scope.startYear;i--) {
          range.push(i);
        }
        $scope.endYearRange = range;
      }
  });

