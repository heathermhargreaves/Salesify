angular.module('app')
  .directive('watchlistnewsDir', function() {
    return {
      restrict: 'E',
      templateUrl: "JS/angular/watchlistnews.html",
      controller: 'mainCtrl'
    };



  });//end directive
