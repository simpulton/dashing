function config($stateProvider) {
  $stateProvider
    .state('app.portfolios', {
      url: '/portfolios',
      views: {
        '@': {
          template: '<portfolios></portfolios>'
        }
      }
    })
    .state('app.portfolios.performance', {
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
