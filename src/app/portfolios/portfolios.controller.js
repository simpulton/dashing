function PortfoliosController(PortfolioService, $scope) {
  var $ctrl = this;

  function getPortfolios() {
    PortfolioService.all()
      .then(function (portfolios) {
        $ctrl.portfolios = portfolios.data;
      })
      .catch(function (error) {
        console.error(error);
      })
  }

  function createPortfolio(portfolio) {
    PortfolioService.create(portfolio)
      .then(function (response) {
        PortfolioService.refreshPortfolios();
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  function updatePortfolio(portfolio) {
    PortfolioService.update(portfolio)
      .then(function (response) {
        PortfolioService.refreshPortfolios();
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  $ctrl.$onInit = function () {
    getPortfolios();
  };

  $ctrl.savePortfolio = function (portfolio) {
    if (!portfolio.id) {
      portfolio.id = _.random(10,1000);
      createPortfolio(portfolio);
    } else {
      updatePortfolio(portfolio);
    }
  };

  $ctrl.deletePortfolio = function (e, id) {
    e.preventDefault();
    e.stopPropagation();

    PortfolioService.delete(id)
      .then(function () {
        getPortfolios();
      });
  };

  $ctrl.setCurrentPortfolio = function (portfolio) {
    $ctrl.currentPortfolio = portfolio;
  };

  $scope.$on('refreshPortfolios', function () {
    getPortfolios();
  });
}

angular.module('portfolios')
  .controller('PortfoliosController', PortfoliosController);
