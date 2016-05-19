function PortfolioDetailsController($scope, $q, RiskService, SymbolService, PortfolioService) {
  var $ctrl = this;

  function initPortfolio() {
    $ctrl.portfolio = {
      name: '',
      symbol: '',
      risk: undefined,
      active: false
    }
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

  function createPortfolio() {
    PortfolioService.create($ctrl.portfolio)
      .then(function (response) {
        PortfolioService.refreshPortfolios();
        initPortfolio();
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  function updatePortfolio() {
    PortfolioService.update($ctrl.portfolio)
      .then(function (response) {
        PortfolioService.refreshPortfolios();
        initPortfolio();
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  $ctrl.savePortfolio = function () {
    if (!$ctrl.portfolio.id) {
      $ctrl.portfolio.id = _.random(10,1000);
      createPortfolio();
    } else {
      updatePortfolio();
    }
  };

  $ctrl.cancel = function () {
    initPortfolio();
  };

  $ctrl.$onInit = function () {
    initPortfolio();
    getRisksAndSymbols();
  };

  $scope.$on('setPortfolio', function (event, portfolio) {
    $ctrl.portfolio = portfolio;
  });
}

angular.module('portfolioDetails')
  .controller('PortfolioDetailsController', PortfolioDetailsController);
