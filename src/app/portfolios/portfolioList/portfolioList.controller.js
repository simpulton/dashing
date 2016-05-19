function PortfolioListController(PortfolioService, $scope, $state) {
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
    $ctrl.isHomeState = $state.is('home');
  };

  $ctrl.deletePortfolio = function (e, id) {
    e.preventDefault();
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
