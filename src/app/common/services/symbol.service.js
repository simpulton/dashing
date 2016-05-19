function SymbolService($http, $q, ENDPOINT_URI, $rootScope) {
  var model = '/symbols',
      service = this;

  function getURL() {
    return ENDPOINT_URI + model;
  }

  service.cacheData = function(results) {
    service.data = results.data;
    return service.data;
  };

  service.all = function () {
    return service.data ? $q.when(service.data) : $http.get(getURL()).then(service.cacheData);
  };

  service.setCurrentSymbol = function (symbol) {
    service.currentSymbol = symbol;
    $rootScope.$broadcast('setSymbol', symbol);
  };

  service.getCurrentSymbol = function () {
    return service.currentSymbol;
  };
}

angular.module('services')
  .service('SymbolService', SymbolService);
