angular.module('app')
  .service('services', function($http, $q, $localStorage) {

    var headers = {
      Authorization: 'Basic NWU3MGQ5NzhkMzk0OTk5MGE0MDkyYTk1NzAwZWEyZWE6NTZiNWMxZGUyNzk5NzkxMTk1NzU5YjI0YzQ5OTUyNmM='
    };


//write function here to make sure the ticker symbol is in all caps


    this.getCompanyInfo = function(ticker) {
        var deferred = $q.defer();
        return $http({
          method: 'GET',
          headers:headers,
          url: 'https://www.intrinio.com/api/companies?ticker=' + ticker
        }).then(function(response) {
          return response.data;
        })
        return deferred.promise;
    }



    this.getCompanyPriceInfo = function(ticker) {
      var deferred = $q.defer();
      return $http({
        method: 'GET',
        headers:headers,
        url: 'https://www.intrinio.com/api/companies?ticker=' + ticker
      }).then(function(response) {
        return response.data[0];
      })
      return deferred.promise;
    },

      this.getCompanyNews = function(ticker) {
        var deferred = $q.defer()
        return $http({
          method: 'GET',
          headers: headers,
          url: 'https://www.intrinio.com/api/news?ticker=' + ticker
        }).then(function(response) {
          return response.data;
        })
        return deferred.promise;
      };


      // this.company = services.companyArr = [];
      this.addCompany = function(ticker) {
        var watchedCompanies = JSON.parse(localStorage.getItem('companies'));
        if(!watchedCompanies) {
          watchedCompanies = [];
        }
        watchedCompanies.push(ticker);
        localStorage.setItem('companies', JSON.stringify(watchedCompanies));
      };

      this.getWatchedCompanies = function() {
        var deferred = $q.defer();
        deferred.resolve(JSON.parse(localStorage.getItem('companies')));
        return deferred.promise;
      };

  }); //end services
