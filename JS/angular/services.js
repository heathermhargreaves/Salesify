angular.module('app')
  .service('services', function($http, $q) {

    var headers = {
      Authorization: 'Basic NWU3MGQ5NzhkMzk0OTk5MGE0MDkyYTk1NzAwZWEyZWE6NTZiNWMxZGUyNzk5NzkxMTk1NzU5YjI0YzQ5OTUyNmM='
    };


//write function here to make sure the ticker symbol is in all caps

//retrieve company info by ticker symbol
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


  //retrieve company stock price
    this.getCompanyPriceInfo = function(ticker) {
      var deferred = $q.defer();
      return $http({
        method: 'GET',
        headers:headers,
        url: 'https://www.intrinio.com/api/companies?ticker=' + ticker
      }).then(function(response) {

      })
      return deferred.promise;
    },

    //retrieve company news by ticker symbol
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

    //saving 'watched' companies to local storage
      this.watchedCompanies = JSON.parse(localStorage.getItem('companies'));
      if(!this.watchedCompanies) {
        this.watchedCompanies = [];
      }

      this.addCompany = function(ticker) {
          this.watchedCompanies.push(ticker);
          localStorage.setItem('companies', JSON.stringify(this.watchedCompanies));
      };

      //removing a company from watched companies collections
      this.removeCompany = function(ticker) {
        for (var i = 0; i < this.watchedCompanies.length; i++) {
          if(ticker === this.watchedCompanies[i]) {
            this.watchedCompanies.splice(i, 1);
            }
          }
          localStorage.setItem('companies', JSON.stringify(this.watchedCompanies));
        };


      //retrieve 'watchedCompanies' from local storage
      this.getWatchedCompanies = function() {
        var deferred = $q.defer();
        deferred.resolve(JSON.parse(localStorage.getItem('companies')));
        return deferred.promise;
      };

  }); //end services
