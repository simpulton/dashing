describe('Unit: updateDetails', function() {
  beforeEach(module('ui.router'));
  beforeEach(module('services'));
  beforeEach(module('updateDetails'));

  describe('route', function() {
    var $state,
        state = 'updates';

    beforeEach(inject(function(_$state_) {
      $state = _$state_;
    }));

    it('verifies state configuration', function() {
      var config = $state.get(state);
      expect(config.name).toEqual('updates');
      expect(config.url).toEqual('/updates');
      expect(config.template).toContain('<update-details');
    });
  });

  describe('controller', function () {
    var component, scope, hero, $componentController, StockService;

    beforeEach(inject(function($q, $rootScope, _$componentController_) {
      scope = $rootScope.$new();
      $componentController = _$componentController_;

      var deferred = $q.defer();
      deferred.resolve('data');
      StockService = {getStocks: function() {return deferred.promise}};
    }));

    it('should call `getStocks` on init', function () {
      component = $componentController('updateDetails', null);
      spyOn(component, 'getStocks');
      component.$onInit();
      expect(component.getStocks).toHaveBeenCalled();
    });

    it('`getStocks` should retrieve stocks data from StockService', function () {
      component = $componentController('updateDetails', {StockService: StockService});
      spyOn(StockService, 'getStocks').and.callThrough();

      component.getStocks();
      scope.$digest();

      expect(StockService.getStocks).toHaveBeenCalled();
      expect(component.data).toEqual('data');
    });
  })
});
