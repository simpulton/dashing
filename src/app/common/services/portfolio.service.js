function PortfolioService($http, $q, ENDPOINT_URI, $rootScope) {
  var model = '/portfolios',
      service = this;

  function getURL() {
    return ENDPOINT_URI + model;
  }

  service.cacheData = function(results) {
    service.data = results.data;
    return service.data;
  };

  service.all = function () {
    return $http.get(getURL());
  };

  service.create = function (portfolio) {
    return $http.post(getURL(), portfolio);
  };

  service.update = function (portfolio) {
    return $http.post(getURL() + '/' + portfolio.id, portfolio);
  };

  service.setCurrentPortfolio = function (portfolio) {
    $rootScope.$broadcast('setPortfolio', angular.copy(portfolio));
  };

  service.refreshPortfolios = function () {
    $rootScope.$broadcast('refreshPortfolios');
  }
}

angular.module('services')
  .service('PortfolioService', PortfolioService);
