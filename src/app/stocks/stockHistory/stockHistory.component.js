var stockHistory = {
  selector: 'stockHistory',
  bindings: {},
  controller: 'StockHistoryController',
  templateUrl: 'stocks/stockHistory/stockHistory.html'
}

angular.module('stockHistory')
  .component('stockHistory', stockHistory);
