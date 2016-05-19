function config($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
  });
}

angular.module('home', [])
  .config(config);
