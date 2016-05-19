var portfoliosByRisk = {
  selector: 'portfoliosByRisk',
  bindings: {
    portfolios: '<'
  },
  controller: 'PortfoliosByRiskController',
  templateUrl: 'portfolios/portfoliosByRisk/portfoliosByRisk.html'
};

angular.module('portfoliosByRisk')
  .component('portfoliosByRisk', portfoliosByRisk);
