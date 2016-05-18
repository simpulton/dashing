var activePortfolios = {
  selector: 'activePortfolios',
  bindings: {},
  controller: 'ActivePortfoliosController',
  templateUrl: 'portfolios/activePortfolios/activePortfolios.html'
}

angular.module('activePortfolios')
  .component('activePortfolios', activePortfolios);
