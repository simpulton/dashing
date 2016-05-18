function StockHistoryController(StockService) {
  StockService.getStocks()
    .then(function () {
      console.log('yay!');
    })
    .catch(function (error) {
      console.log(error);
    })
}

angular.module('stockHistory')
  .controller('StockHistoryController', StockHistoryController);
