angular.module('app')
  .directive('watchlistDir', function() {
    return {
      restrict: 'E',
      templateUrl: "JS/angular/watchlistcard.html",
      controller: 'mainCtrl'
    };



  });//end directive
