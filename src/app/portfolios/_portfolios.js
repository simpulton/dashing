function config($stateProvider) {
  $stateProvider
    .state('portfolios', {
      url: '/portfolios',
      template: '<portfolios></portfolios>'
  });
}

angular.module('portfolios', [
  'portfolioList',
  'portfolioDetails',
  'portfoliosByRisk',
  'activePortfolios'
])
  .config(config);
