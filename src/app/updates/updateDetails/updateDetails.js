angular.module('updateDetails', ['stocks'])
  .component('updateDetails', {
    selector: 'updateDetails',
    templateUrl: 'updates/updateDetails/updateDetails.html',
    controller: 'UpdateDetailsController'
  })
  .controller('UpdateDetailsController', function UpdateDetailsController($http, StockService, $scope) {
    var $ctrl = this;

    function getStocks() {
      StockService.getStocks()
        .then(function success(results) {
          $ctrl.data = results;
        })
        .catch(function error(error) {
          console.log(error);
        });
    }

    function searchCallback(event, query) {
      $ctrl.query = query;
    }

    this.$onInit = function $onInit() {
      getStocks();
      $scope.$on('search', searchCallback);
    }
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('updates', {
        url: '/updates',
        template: '<update-details class="mdl-grid demo-content"></update-details>'
    });
  });
