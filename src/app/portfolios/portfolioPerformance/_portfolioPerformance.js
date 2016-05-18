function config($stateProvider) {
  $stateProvider
    .state('portfolios.performance', {
      url: '/performance',
      template: '<portfolio-performance></portfolio-performance>'
  });
}

angular.module('portfolioPerformance', ['chart.js'])
  .config(config);
