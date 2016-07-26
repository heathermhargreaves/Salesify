angular.module('app')
    .controller('mainCtrl', function($scope, $window, $stateParams, $state, $http, services) {

      //retrieving company info
      $scope.show = false;
        $scope.getCompanyInfo = function(ticker) {
            services.getCompanyInfo(ticker.toUpperCase()).then(function(response) {
                console.log(response);
                $scope.companyName = response.name;
                $scope.ceo = response.ceo;
                $scope.business_address = response.business_address;
                $scope.employees = response.employees;
                $scope.business_phone_no = response.business_phone_no;
                $scope.company_url = response.company_url;
                $scope.hq_country = response.inc_country;
                $scope.industry_category = response.category;
                $scope.industry_group = response.industry_group;
                $scope.short_description = response.short_description;
                $scope.long_description = response.long_description;
                $scope.hq_state = response.hq_state;
                $scope.hq_address_city = response.hq_address_city;
                console.log($scope.hq_state);
                $scope.show = true;
            });
        };


        //retrieving news about company
        $scope.getCompanyNews = function(ticker) {
            services.getCompanyNews(ticker).then(function(response) {
                console.log(response);
                $scope.news_articles = response.data;

                $scope.show = true;
            });
        };

        //adding ticker to watched companies collection
        $scope.addCompany = function(ticker) {
          services.addCompany(ticker);
        };

        //removing ticker from watched companies collection
        $scope.removeCompany = function(ticker) {
          services.removeCompany(ticker);
          $state.go('watchlist');
        };


        //retrieving watched companies collection
        function getWatchedCompanies() {
          services.getWatchedCompanies().then(function(response) {
            $scope.companies = response;
            //filtering to ensure that if a company is already in the watched companies collection, it will not get added again
            console.log($scope.companies);
            $scope.companies = $scope.companies.filter(function(c) {
              c = c.toUpperCase();
              if(c === "") {
                return false;
              }
              else if (c === null) {
                return true;
              }
              return true;
            });
            $scope.companies.sort();
            console.log($scope.companies);
          });
        }
        getWatchedCompanies();

      //get company stock info
        $scope.getCompanyPriceInfo = function(ticker) {
            services.getCompanyPriceInfo(ticker).then(function(response) {
                console.log(response.data);

            });
        };

      // changing views on watchlist news and watchlist info directives so the other one gets open, the open one closes
        $scope.changeView = function(view) {
          if(view === 'info') {
            $scope.hidden = !$scope.hidden;
            $scope.hide = false;
          }
          else if (view === 'news') {
            $scope.hide = !$scope.hide;
            $scope.hidden = false;
          }
        };

    //function to reload ui view on click
    //   var check = true;
    // $scope.reloadWatchlist = function() {
    //
    //   console.log('hey');
    //   if ($state.current.name === 'watchlist' && check) {
    //     check = false;
    //     $window.location.reload();
    //   }
    //   };
      // $scope.reloadWatchlist();




    }); //end controller
