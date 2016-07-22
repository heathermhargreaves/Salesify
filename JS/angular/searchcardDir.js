angular.module('app')
  .directive('searchcardDir', function() {

    return {
      restrict: 'E',
      templateUrl: 'js/angular/searchcard.html',
      controller: 'mainCtrl'
    };

  }); //end directive
