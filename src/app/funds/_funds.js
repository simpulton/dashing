function config($stateProvider) {
  $stateProvider
    .state('funds', {
      url: '/funds',
      template: '<funds></funds>'
    });
}

angular.module('funds', [
    'funddetails'
  ])
  .config(config);
