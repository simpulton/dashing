function StockService($http, $q, ENDPOINT_URI) {
  // var model = 'http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.historicaldata where symbol = "${}" and startDate = "2016-01-01" and endDate = "2016-05-17"&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback=',
  var model = '/stocks',
      service = this;

  function getURL(symbol) {
    return ENDPOINT_URI + model + '?Symbol=' + symbol;
  }

  service.getStocks = function getStocks(symbol) {
    return $http.get(getURL(symbol));
  };
}

angular.module('services')
  .service('StockService', StockService);
