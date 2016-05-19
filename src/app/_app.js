var ENDPOINT_URI = 'http://localhost:3000';

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
  //abstract state serves as a PLACEHOLDER or NAMESPACE for application states
    .state('app', {
      abstract: true
  })
  .state('app.child', {
    url: '/child',
    template: '<child></child>'
  })
  .state('app.otherChild', {
    url: '/other',
    template: '<other></other>'
  });

  $urlRouterProvider.otherwise('/child');
}

angular.module('app', [
  'ui.router',
  'common',
  'stockHistory',
  'portfolioList',
  'templates-app'
])
  .constant('ENDPOINT_URI', ENDPOINT_URI)
  .config(config);
