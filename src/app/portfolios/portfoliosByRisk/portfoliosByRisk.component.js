var portfoliosByRisk = {
  selector: 'portfoliosByRisk',
  bindings: {},
  controller: 'PortfoliosByRiskController',
  templateUrl: 'portfolios/portfoliosByRisk/portfoliosByRisk.html'
}

angular.module('portfoliosByRisk')
  .component('portfoliosByRisk', portfoliosByRisk);
