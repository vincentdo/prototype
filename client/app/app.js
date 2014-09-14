'use strict';

angular.module('prototypeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'mediaPlayer'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });