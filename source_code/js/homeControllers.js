var homeControllers = angular.module('homeControllers', ["team_service"]);

homeControllers.controller('team_controller', 
    function($log, $scope, performance) {
       $scope.drawChart = function(){
             var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

              var options = {
                  title: 'Team Performance',
                  curveType: 'function',
                  legend: { position: 'bottom' },
                  width: '100%',
                  height: 500,
                };
              chart.draw($scope.data, options);


              var table = new google.visualization.Table(document.getElementById('table_div'));

              
              table.draw($scope.data, { width: '100%',height: 500});
          }
       var promise = 
           performance.getMovie();
       promise.then(
          function(payload) { 
              console.log(payload.data);
              $scope.data = new google.visualization.DataTable(payload.data);
              google.load('visualization', '1', {'packages':['corechart','table','geochart'],"callback": drawFlyAtlasChart});
          
              // Set a callback to run when the Google Visualization API is loaded.
              google.setOnLoadCallback($scope.drawChart);
                      // Instantiate and draw our chart, passing in some options.
             
          },
          function(errorPayload) {
              $log.error('failure loading movie', errorPayload);
          });
         
  });

// homeControllers.controller('team_controller', ['$scope', '$http',
//   function ($scope, $http) {

//     console.log('fd');
//     function register(){
//       console.log('fd');
//       //alert($scope.email.text);
//       // $http.get('phones/phones.json').success(function(data) {
//       //   $scope.phones = data;
//       // });
//   }

//     $scope.register = register;
//   }]);
