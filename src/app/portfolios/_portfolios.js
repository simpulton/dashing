function config($stateProvider) {
  $stateProvider
    .state('portfolios', {
      url: '/portfolios',
      template: '<portfolios></portfolios>'
    })
    .state('portfolios.performance', {
      url: '/performance',
      template: '<performance></performance>'
    });
}

angular.module('portfolios', [
  'portfolioList',
  'portfolioDetails',
  'portfoliosByRisk',
  'activePortfolios'
])
  .config(config);
