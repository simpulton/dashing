function config($stateProvider) {
  $stateProvider
    .state('app.home', {
      url: '/home',
      views: {'@': { template: '<home></home>' }}
  });
}

angular.module('home', [])
  .config(config);
