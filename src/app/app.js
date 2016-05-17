angular.module('app', [
    'ui.router',
    'sideNav',
    'navigation',
    'charts',
    'graphs',
    'updates',
    'options',
    'svgs',
    'templates-app'
])
  .component('app', {
    selector: 'app',
    templateUrl: 'app.html'
  })
  .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
          //abstract state serves as a PLACEHOLDER or NAMESPACE for application states
          .state('app', {
              url: '',
              abstract: true
          })
      ;

      $urlRouterProvider.otherwise('/');
  })
;
