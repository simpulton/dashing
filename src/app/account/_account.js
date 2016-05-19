function config($stateProvider) {
  $stateProvider
    .state('account', {
      url: '/account',
      template: '<account></account>'
    });
}
 
angular.module('account', ['accountDetails'])
  .config(config);
