angular.module('optionDetails', [])
  .component('optionDetails', {
    selector: 'optionDetails',
    templateUrl: 'options/optionDetails/optionDetails.html'
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('options', {
        url: '/options',
        template: '<option-details class="mdl-grid demo-content"></option-details>'
    });
  });
;
