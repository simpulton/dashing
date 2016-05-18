function config($stateProvider, $urlRouterProvider) {
  $stateProvider
  //abstract state serves as a PLACEHOLDER or NAMESPACE for application states
    .state('app', {
      abstract: true
  });

  $urlRouterProvider.otherwise('/home');
}

angular.module('app', [
  'ui.router',
  'stocks',
  'portfolios',
  'templates-app'
])
  .config(config);
