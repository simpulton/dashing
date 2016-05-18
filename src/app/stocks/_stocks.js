function config($stateProvider) {
  $stateProvider
    .state('stocks', {
      url: '/stocks',
      template: '<stocks></stocks>'
    });
}

angular.module('stocks', [
  'symbols',
  'stockPerformance',
  'history'
])
  .config(config);
