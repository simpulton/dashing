describe('Unit: PortfolioList', function () {
  beforeEach(module('ui.router'));
  beforeEach(module('portfolioList'));

  describe('controller', function () {
    var component, scope, $componentController, StockService;

    beforeEach(inject(function($q, $rootScope, _$componentController_) {
      scope = $rootScope.$new();
      $componentController = _$componentController_;

      var deferred = $q.defer();
      deferred.resolve({data: 'portfolios'});
      PortfolioService = {all: function() {return deferred.promise}};
    }));

    it('should call `getPortfolios` on init', function () {
      component = $componentController('portfolioList', {PortfolioService: PortfolioService});
      spyOn(component, 'getPortfolios');
      component.$onInit();
      expect(component.getPortfolios).toHaveBeenCalled();
    });

    it('`getPortfolios` should retrieve stocks data from StockService', function () {
      component = $componentController('portfolioList', {PortfolioService: PortfolioService});
      spyOn(PortfolioService, 'all').and.callThrough();

      component.getPortfolios();
      scope.$digest();

      expect(PortfolioService.all).toHaveBeenCalled();
      expect(component.portfolios).toEqual('portfolios');
    });
  });
});
