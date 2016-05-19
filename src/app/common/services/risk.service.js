function RiskService($http, $q, ENDPOINT_URI) {
  var model = '/risks',
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
}

angular.module('services')
  .service('RiskService', RiskService);
