function PortfoliosByRiskController(PortfolioService, $scope) {
  var $ctrl = this;

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
  };

  $ctrl.$onChanges = function () {
    groupByRisk();
  };
}

angular.module('portfoliosByRisk')
  .controller('PortfoliosByRiskController', PortfoliosByRiskController);
