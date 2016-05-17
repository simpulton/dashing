angular.module('updateDetails', [])
  .component('updateDetails', {
    selector: 'updateDetails',
    templateUrl: 'updates/updateDetails/updateDetails.html',
    controller: 'UpdateDetailsController'
  })
  .controller('UpdateDetailsController', function UpdateDetailsController($http, StockService, $scope) {
    var $ctrl = this;

    $ctrl.getStocks = function() {
      StockService.getStocks()
        .then(function success(results) {
          $ctrl.data = results;
        })
        .catch(function error(error) {
          console.log(error);
        });
    };

    $ctrl.searchCallback = function(event, query) {
      $ctrl.query = query;
    };

    $ctrl.$onInit = function() {
      $ctrl.getStocks();
      $scope.$on('search', $ctrl.searchCallback);
    };
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('updates', {
        url: '/updates',
        template: '<update-details class="mdl-grid demo-content"></update-details>'
    });
  });
