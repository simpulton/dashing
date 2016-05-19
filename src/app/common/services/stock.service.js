function StockService($http, $q) {
  var model = 'http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.historicaldata where symbol = "${}" and startDate = "2016-01-01" and endDate = "2016-05-17"&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback=',
      service = this;

  function getURL(symbol) {
    return model.replace('${}', symbol);
  }

  service.getStocks = function getStocks(symbol) {
    console.log(getURL(symbol));
    return $http.get(getURL(symbol));
  };
}

angular.module('services')
  .service('StockService', StockService);
