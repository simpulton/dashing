var stocks = {
  selector: 'stocks',
  bindings: {},
  controller: 'StocksController',
  templateUrl: 'stocks/stocks.html'
}

angular.module('stocks')
  .component('stocks', stocks);
