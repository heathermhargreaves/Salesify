angular.module('app', ['ui.router', 'angularMoment']);

angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('search', {
          url: '/search',
          templateUrl: "../views/search.html",
          controller: 'mainCtrl'
        })
        .state('watchlist', {
          url: '/watchlist',
          templateUrl: '../views/watchlist.html',
          controller: 'mainCtrl'
          // resolve: {
          //   reload: function($window) {
          //     $window.location.reload();
          //   }
          // }
        })
        .state('about', {
          url: '/',
          templateUrl: '../views/about.html',
          controller: 'mainCtrl'
        });

    $urlRouterProvider
      .otherwise('/');



  });  //end config
