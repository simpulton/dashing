angular.module('home', [])
  .component('home', {
    selector: 'home',
    templateUrl: 'home/home.html'
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        template: '<home class="mdl-grid demo-content"></home>'
    });
  });
