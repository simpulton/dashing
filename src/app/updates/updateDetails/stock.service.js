angular.module('stocks', [])
  .service('StockService', function StockService($http, $q) {
    var model = 'http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.historicaldata where symbol in ("MSFT","AAPL","GOOG") and startDate = "2016-01-01" and endDate = "2016-05-17"&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback=',
        stockData;

    function cacheData(results) {
      return stockData = results.data.query.results.quote;
    }

    this.getStocks = function getStocks() {
      return stockData ? $q.when(stockData) : $http.get(model).then(cacheData);
    }
  })
