angular.module('app')
    .controller('mainCtrl', function($scope, $stateParams, $http, $localStorage, services) {

      $scope.show = false;
        $scope.getCompanyInfo = function(ticker) {
            services.getCompanyInfo(ticker).then(function(response) {
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
      //  $scope.getCompanyInfo();

        // var company = {
        //   name: $scope.name,
        //   ceo: $scope.ceo
        // }

        $scope.getCompanyNews = function(ticker) {
            services.getCompanyNews(ticker).then(function(response) {
                console.log(response);
                $scope.news_articles = response.data;
            });
        };

        $scope.addCompany = function(ticker) {
          services.addCompany(ticker);
        };

        function getWatchedCompanies() {
          services.getWatchedCompanies().then(function(response) {
            $scope.companies = response;
            $scope.companies = $scope.companies.filter(function(c) {
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
          })
        }
        getWatchedCompanies();

        $scope.getCompanyPriceInfo = function(ticker) {
            services.getCompanyPriceInfo(ticker).then(function(response) {
                console.log(response.data);

            });
        };

//




    }); //end controller
