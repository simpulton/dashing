function config($stateProvider) {
  $stateProvider
    .state('app.stocks', {
      url: '/stocks',
      views: {'@': { template: '<stocks></stocks>' }}
    });
}

angular.module('stocks', [
  'symbols',
  'stockHistory'
])
.config(config);
