var filterModule = angular.module('filter_module', []);

function getTeamIds(teams){
   var teamids = [];
    for(var team in teams){
      var currentTeam = teams[team];
      teamids.push(currentTeam.teamId);
    }
    return teamids;
}

function fetchData($scope,$location){
  global.query = $location.search();
  if($scope.selectedTeams[0]){
    var teamids = getTeamIds($scope.selectedTeams);
    var promise = $scope.fetchDataService(teamids,$scope.startYear,$scope.endYear);
    promise.then(
    function(payload) { 
      $scope.onSelectionChange(payload,$scope.selectedTeams,$scope.startYear,$scope.endYear);        
    },
    function(errorPayload) {
        console.log('failure loading '+errorPayload);
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
  function($scope,$location) {

    console.log($location.search());
    $scope.queryTeams = $location.search().teams;
    $scope.allLeagues=global.leagues;
    $scope.selectedTeams = [];
    $scope.selectedLeagues = global.leagues;
    $scope.onLeagueChange = function() {  
        $scope.queryTeams = $location.search().teams;
        var teams = [];
        var i=0;
        $scope.selectedTeams = [];
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
            if($scope.queryTeams){
              if($scope.queryTeams.indexOf(teams[i].teamId)>-1){
                teams[i].ticked = true;
                $scope.selectedTeams.push(teams[i]);
              }
            }
            i++;
          }else{
            global.teams[team].ticked = false;
          }
        }
        $scope.teams = teams;
        $scope.onChange($scope.selectedTeams);
    }  
    console.log("filter");
    $scope.onChange = function(teams){
      $location.search('teams',getTeamIds(teams));
      $scope.selectedTeams = teams;
      fetchData($scope,$location);
    }
    $scope.onLeagueChange();
    //$scope.onChange($scope.selectedTeams);
  });
filterModule.controller('year_filter_controller', 
  function($scope,$location) {
    
      $scope.startYearRange = [];
      for(var i=2014;i>1960;i--) {
        $scope.startYearRange.push(i);
      }
      $scope.endYearRange = [2014];

      $scope.startYearChange = function(){
        updateEndDateRange();
        fetchData($scope,$location);
      };
      $scope.endYearChange = function(){
        $location.search('endYear',$scope.endYear);
        fetchData($scope,$location);
      };
      function updateEndDateRange(){
        if($scope.endYear<$scope.startYear)
          $scope.endYear = $scope.startYear;
        var range = [];
        for(var i=2014;i>=$scope.startYear;i--) {
          range.push(i);
        }
        $scope.endYearRange = range;
        $location.search('startYear',$scope.startYear);
        $location.search('endYear',$scope.endYear);
      }
      var query = $location.search();
      if(query.endYear){
        $scope.endYear = parseInt(query.endYear);
      }else{
        $scope.endYear = $scope.endYearRange[0]
      }
      if(query.startYear){
        $scope.startYear = parseInt(query.startYear);
      }else{
        $scope.startYear = $scope.startYearRange[0]
      }
      updateEndDateRange();
  });

