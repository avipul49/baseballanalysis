var baseball_main = angular.module('baseball_main', [
  'ngRoute','team_module','players_controller','salaries_controller','filter_module','isteven-multi-select']);

baseball_main.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/team', {
        templateUrl: 'html/team1.html'
      }).
      when('/players', {
        templateUrl: 'html/players.html'
      }).
      when('/salaries', {
        templateUrl: 'html/salaries.html'
      }).
      when('/support', {
        templateUrl: 'html/support.html'
      }).
      when('/blogs', {
        templateUrl: 'html/blogs.html'
      })
  }]);