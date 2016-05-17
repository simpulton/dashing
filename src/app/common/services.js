angular.module('services', [])
  .service('AppService', function AppService($rootScope) {
    this.performSearch = function performSearch(query) {
      $rootScope.$broadcast('search', query);
    };
  })
  .service('StockService', function StockService($http, $q) {
    var model = 'http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.historicaldata where symbol in ("MSFT","AAPL","GOOG") and startDate = "2016-01-01" and endDate = "2016-05-17"&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback=',
        service = this;

    service.cacheData = function(results) {
      service.stockData = results.data.query.results.quote;
      return service.stockData;
    };

    service.getStocks = function getStocks() {
      return service.stockData ? $q.when(service.stockData) : $http.get(model).then(service.cacheData);
    };
  });
