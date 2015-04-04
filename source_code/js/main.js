var baseball_main = angular.module('baseball_main', [
  'ngRoute','team_module','players_controller','salaries_controller','filter_module','isteven-multi-select','widget_module']);

baseball_main.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/team', {
        templateUrl: 'html/widget.html',
        controller : 'team_controller',
        reloadOnSearch: false
      }).
      when('/players', {
        templateUrl: 'html/players.html',
        reloadOnSearch: false
      }).
      when('/team_salary', {
        templateUrl: 'html/widget.html',
        controller : 'player_salaries_controller',
        reloadOnSearch: false
      }).when('/team_orientation', {
        templateUrl: 'html/widget.html',
        controller : 'team_orientation_controller',
        reloadOnSearch: false
      })
  }]);



