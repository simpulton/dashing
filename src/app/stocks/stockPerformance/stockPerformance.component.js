var stockPerformance = {
  selector: 'stockPerformance',
  bindings: {},
  controller: 'StockPerformanceController',
  templateUrl: 'stocks/stockPerformance/stockPerformance.html'
}

angular.module('stockPerformance')
  .component('stockPerformance', stockPerformance);
