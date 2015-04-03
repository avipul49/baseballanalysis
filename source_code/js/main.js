var baseball_main = angular.module('baseball_main', [
  'ngRoute','team_module','players_controller','salaries_controller','filter_module','isteven-multi-select']);

baseball_main.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/team', {
        templateUrl: 'html/team1.html',
        reloadOnSearch: false
      }).
      when('/players', {
        templateUrl: 'html/players.html',
        reloadOnSearch: false
      }).
      when('/salaries', {
        templateUrl: 'html/salaries.html',
        reloadOnSearch: false
      })
  }]);



