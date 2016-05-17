angular.module('services', [])
  .service('AppService', function AppService($rootScope) {
    this.performSearch = function performSearch(query) {
      $rootScope.$broadcast('search', query);
    }
  })
