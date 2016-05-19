function PortfolioListController(PortfolioService, $scope) {
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

  $ctrl.$onInit = function () {
    getPortfolios();
  };

  $ctrl.deletePortfolio = function (e, id) {
    e.stopPropagation();

    PortfolioService.delete(id)
      .then(function () {
        getPortfolios();
      });
  };

  $ctrl.setCurrentPortfolio = PortfolioService.setCurrentPortfolio;

  $scope.$on('refreshPortfolios', function () {
    getPortfolios();
  });
}

angular.module('portfolioList')
  .controller('PortfolioListController', PortfolioListController);
