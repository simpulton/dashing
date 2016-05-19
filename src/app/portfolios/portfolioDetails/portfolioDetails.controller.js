function PortfolioDetailsController($scope, $q, RiskService, SymbolService, PortfolioService) {
  var $ctrl = this;

  function initPortfolio() {
    $ctrl.portfolio = {
      name: '',
      symbol: '',
      risk: undefined,
      active: false
    };
  }

  function getRisksAndSymbols() {
    $q.all([RiskService.all(), SymbolService.all()])
      .then(function (bundle) {
        $ctrl.risks = bundle[0];
        $ctrl.symbols = bundle[1];
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  $ctrl.cancel = function () {
    initPortfolio();
  };

  $ctrl.savePortfolio = function () {
    $ctrl.save({portfolio: $ctrl.portfolio});
    initPortfolio();
  };

  $ctrl.$onInit = function () {
    initPortfolio();
    getRisksAndSymbols();
  };

  $ctrl.$onChanges = function () {
    $ctrl.portfolio = angular.copy($ctrl.portfolio);
  };
}

angular.module('portfolioDetails')
  .controller('PortfolioDetailsController', PortfolioDetailsController);
