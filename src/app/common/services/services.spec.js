describe("Unit: services", function () {
  beforeEach(module(function ($provide) {
    $provide.value('ENDPOINT_URI', '');
  }));

  beforeEach(module('services'));

  describe('PortfolioService', function () {
    var PortfolioService, $httpBackend, mockResponse, $rootScope;

    beforeEach(inject(function (_PortfolioService_, _$httpBackend_, _$rootScope_) {
      PortfolioService = _PortfolioService_;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;

      mockResponse = [];
    }));

    afterEach(inject(function ($httpBackend) {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    }));

    it('`all` should retrieve portfolios', function () {
      $httpBackend.when('GET', '/portfolios').respond(mockResponse);

      var promise = PortfolioService.all();
      $httpBackend.flush();

      promise.then(function (result) {
        expect(result.data).toEqual([]);
      });
    });

    it('`setCurrentPortfolio` triggers an event on $rootScope', function () {
      var portfolio = {name: 'My Portfolio'};

      spyOn($rootScope, '$broadcast');

      PortfolioService.setCurrentPortfolio(portfolio);

      expect($rootScope.$broadcast).toHaveBeenCalledWith('setPortfolio', portfolio);
    });
  });
});
