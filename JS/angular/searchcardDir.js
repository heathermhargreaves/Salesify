angular.module('app')
  .directive('searchcardDir', function() {

    return {
      restrict: 'E',
      templateUrl: 'JS/angular/searchcard.html',
      controller: 'mainCtrl'
    };

  }); //end directive
