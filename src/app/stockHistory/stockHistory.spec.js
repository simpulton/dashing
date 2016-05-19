describe('Unit: StockHistory', function () {
  beforeEach(module('stockHistory'));

  describe('controller', function () {
    var component, $componentController, StockService;

    beforeEach(inject(function($q, _$componentController_) {
      $componentController = _$componentController_;

      var deferred = $q.defer();
      deferred.resolve();
      StockService = {getStocks: function () {return deferred.promise}};
    }));

    it('should set `currentSymbol` on init', function () {
      component = $componentController('stockHistory', {StockService: StockService});
      component.$onInit();
      expect(component.currentSymbol).toBeDefined();
    });
  });
});
