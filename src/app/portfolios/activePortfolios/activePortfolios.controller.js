function ActivePortfoliosController(PortfolioService, $scope) {
  var $ctrl = this;

  function getPortfolios() {
    PortfolioService.all()
      .then(function (portfolios) {
        $ctrl.portfolios = portfolios.data;
        groupByActive();
      })
      .catch(function (error) {
        console.error(error);
      })
  }

  function groupByActive() {
    $ctrl.data = [
      _.filter($ctrl.portfolios, {active: true}).length,
      _.filter($ctrl.portfolios, {active: false}).length
    ];
  }


  $ctrl.$onInit = function () {
    $ctrl.labels = ["Active", "Not Active"];
    $ctrl.options = {
      legend : {
        display: true,
        position:'bottom'
      }
    };
    getPortfolios();
  }

  $scope.$on('refreshPortfolios', function () {
    getPortfolios();
  });
}

angular.module('activePortfolios')
  .controller('ActivePortfoliosController', ActivePortfoliosController);
