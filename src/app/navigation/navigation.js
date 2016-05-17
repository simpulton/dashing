angular.module('navigation', [])
  .component('navigation', {
    selector: 'navigation',
    templateUrl: 'navigation/navigation.html',
    controller: 'NavigationController'
  })
  .controller('NavigationController', function NavigationController($rootScope, AppService) {
    var $ctrl = this;

    this.$onInit = function () {
      $rootScope.$on('$stateChangeSuccess', function $stateChangeSuccess(event, toState) {
        var capitalName = toState.name.charAt(0).toUpperCase() + toState.name.slice(1);
        $ctrl.routeName = capitalName;
      });
    }

    this.doSearch = function doSearch() {
      AppService.performSearch(this.search);  
    }
  })
;
