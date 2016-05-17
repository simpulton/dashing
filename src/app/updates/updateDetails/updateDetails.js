angular.module('updateDetails', [])
  .component('updateDetails', {
    selector: 'updateDetails',
    templateUrl: 'updates/updateDetails/updateDetails.html'
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('updates', {
        url: '/updates',
        template: '<update-details class="mdl-grid demo-content"></update-details>'
    });
  });
;
