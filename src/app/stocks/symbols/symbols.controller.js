function SymbolsController(SymbolService) {
  var $ctrl = this;

  function getSymbols() {
    SymbolService.all()
      .then(function (symbols) {
        $ctrl.symbols = symbols;
        $ctrl.currentSymbol = SymbolService.getCurrentSymbol() || _.find(symbols, {code: 'AAPL'}).code;
        $ctrl.setCurrentSymbol($ctrl.currentSymbol);
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  $ctrl.setCurrentSymbol = SymbolService.setCurrentSymbol;

  $ctrl.$onInit = function () {
    getSymbols();
  };
}

angular.module('symbols')
  .controller('SymbolsController', SymbolsController);
