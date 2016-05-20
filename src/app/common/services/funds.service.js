function FundsService($q) {
  this.funds = [
    {name: 'fund one'},
    {name: 'fund two'},
    {name: 'fund three'}
  ];
  
  function cacheData(data) {
    this.funds = data;
    return data;
  }  
  
  this.all = function() {
    return this.funds ? $q.when(this.funds) : $http.get().then(cacheData);
  }
}

angular.module('services')
  .service('FundsService', FundsService);