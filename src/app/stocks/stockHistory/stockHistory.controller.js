function StockHistoryController(StockService, SymbolService, $filter, $scope, $state) {
  var $ctrl = this;

  function getStockHistory() {
    StockService.getStocks($ctrl.currentSymbol)
    .then(function (history) {
      $ctrl.history = $filter('limitTo')(history.data.query.results.quote);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  $ctrl.$onInit = function () {
    $ctrl.currentSymbol = SymbolService.getCurrentSymbol() || 'AAPL';

    if ($state.is('home')) {
      getStockHistory();
    };
  };

  $scope.$on('setSymbol', function (event, symbol) {
    $ctrl.currentSymbol = symbol;
    getStockHistory();
  });
}

angular.module('stockHistory')
  .controller('StockHistoryController', StockHistoryController);
