function PortfolioListController(PortfolioService, $scope, $state) {
  var $ctrl = this;

  $ctrl.getPortfolios = function () {
    PortfolioService.all()
      .then(function (portfolios) {
        $ctrl.portfolios = portfolios.data;
      })
      .catch(function (error) {
        console.error(error);
      })
  };

  $ctrl.$onInit = function () {
    $ctrl.getPortfolios();
    $ctrl.isHomeState = $state.is('home');
  };

  $ctrl.deletePortfolio = function (e, id) {
    e.stopPropagation();

    PortfolioService.delete(id)
      .then(function () {
        getPortfolios();
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  $ctrl.setCurrentPortfolio = PortfolioService.setCurrentPortfolio;

  $scope.$on('refreshPortfolios', function () {
    getPortfolios();
  });
}

angular.module('portfolioList')
  .controller('PortfolioListController', PortfolioListController);
