function ActivePortfoliosController(PortfolioService, $scope) {
  var $ctrl = this;

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
  };

  $ctrl.$onChanges = function () {
    groupByActive();
  };
}

angular.module('activePortfolios')
  .controller('ActivePortfoliosController', ActivePortfoliosController);
