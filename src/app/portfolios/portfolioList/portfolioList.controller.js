function PortfolioListController(PortfolioService, $scope, $state) {
  var $ctrl = this;

  $ctrl.isHomeState = $state.is('home');
}

angular.module('portfolioList')
  .controller('PortfolioListController', PortfolioListController);
