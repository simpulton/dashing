var stockHistory = {
  selector: 'stockHistory',
  bindings: {},
  controller: 'StockHistoryController',
  templateUrl: 'stockHistory/stockHistory.html'
}

angular.module('stockHistory')
  .component('stockHistory', stockHistory);
