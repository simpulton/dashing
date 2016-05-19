function StockHistoryController(StockService, $filter, $scope) {
  var $ctrl = this;

  function getStockHistory() {
    StockService.getStocks($ctrl.currentSymbol)
    .then(function (history) {
      console.log(history);
      $ctrl.history = $filter('limitTo')(history.data.query.results.quote);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  $scope.$on('setSymbol', function (event, symbol) {
    $ctrl.currentSymbol = symbol;
    getStockHistory();
  });
}

angular.module('stockHistory')
  .controller('StockHistoryController', StockHistoryController);
