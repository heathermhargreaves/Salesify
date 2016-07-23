angular.module('app', ['ui.router', 'ngStorage']);

angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('search', {
          url: '/',
          templateUrl: "../views/search.html"
        })
        .state('watchlist', {
          url: '/watchlist',
          templateUrl: '../views/watchlist.html'
        })
        .state('about', {
          url: '/about',
          templateUrl: '../views/about.html'
        });

    $urlRouterProvider
      .otherwise('/');



  });  //end config
