function HomeController(PortfolioService, $scope) {
  var $ctrl = this;

  function getPortfolios() {
    PortfolioService.all()
      .then(function (portfolios) {
        $ctrl.portfolios = portfolios.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  $ctrl.$onInit = function () {
    getPortfolios();
  };
}

angular.module('home')
  .controller('HomeController', HomeController);
