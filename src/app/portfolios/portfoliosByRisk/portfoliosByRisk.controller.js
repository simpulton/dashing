function PortfoliosByRiskController(PortfolioService, $scope) {
  var $ctrl = this;

  function getPortfolios() {
    PortfolioService.all()
      .then(function (portfolios) {
        $ctrl.portfolios = portfolios.data;
        groupByRisk();
      })
      .catch(function (error) {
        console.error(error);
      })
  }

  function groupByRisk() {
    $ctrl.data = [
      [
        _.filter($ctrl.portfolios, {risk: 1}).length,
        _.filter($ctrl.portfolios, {risk: 2}).length,
        _.filter($ctrl.portfolios, {risk: 3}).length
      ]
    ];
  }


  $ctrl.$onInit = function () {
    $ctrl.labels = ["Risk level 1", "Risk level 2", "Risk level 3"];
    $ctrl.series = ['Portfolios'];
    $ctrl.options = {
      legend : {
        display: true,
        position: 'bottom'
      }
    };

    getPortfolios();
  }

  $scope.$on('refreshPortfolios', function () {
    getPortfolios();
  });
}

angular.module('portfoliosByRisk')
  .controller('PortfoliosByRiskController', PortfoliosByRiskController);
