function StockHistoryController(StockService, $filter) {
  var $ctrl = this;

  function getStockHistory() {
    StockService.getStocks($ctrl.currentSymbol)
    .then(function (history) {
      $ctrl.history = $filter('limitTo')(history.data.query.results.quote, 7);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  $ctrl.$onInit = function () {
    $ctrl.currentSymbol = 'AAPL';
    getStockHistory();
  };
}

angular.module('stockHistory')
  .controller('StockHistoryController', StockHistoryController);
