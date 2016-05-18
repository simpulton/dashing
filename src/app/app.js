angular.module('app', [
    'ui.router',
    'templates-app'
  ])
  .component('app', {
    selector: 'app',
    templateUrl: 'app.html'
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    //abstract state serves as a PLACEHOLDER or NAMESPACE for application states
      .state('app', {
        abstract: true
    });

    $urlRouterProvider.otherwise('/home');
  });
