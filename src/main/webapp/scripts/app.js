'use strict';

angular.module('ploufplouf',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Ploufs',{templateUrl:'views/Plouf/search.html',controller:'SearchPloufController'})
      .when('/Ploufs/new',{templateUrl:'views/Plouf/detail.html',controller:'NewPloufController'})
      .when('/Ploufs/edit/:PloufId',{templateUrl:'views/Plouf/detail.html',controller:'EditPloufController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
