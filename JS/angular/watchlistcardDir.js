angular.module('app')
  .directive('watchlistDir', function() {
    return {
      templateUrl: "JS/angular/watchlistcard.html",
      restrict: 'E',
      controller: 'mainCtrl'
    };



  });//end directive
