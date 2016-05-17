describe("Unit: services", function() {
  beforeEach(module('services'));

  describe('StockService', function() {
    var StockService, $httpBackend, mockResponse, cachingResponse;

    beforeEach(inject(function(_StockService_, _$httpBackend_) {
      StockService = _StockService_;
      $httpBackend = _$httpBackend_;

      mockResponse = {query: {results: {quote: []}}};
      cachingResponse = {data: mockResponse};
    }))

    afterEach(inject(function($httpBackend) {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    }));

    it('`cacheData` should store stock data locally', function () {
      StockService.cacheData(cachingResponse);
      expect(StockService.stockData).toEqual([]);
    });

    it('`getStocks` should get stock data', function() {
      $httpBackend.when('GET', /query\.yahooapis\.com\/v1\/public\/yql\?q\=/).respond(mockResponse);

      var promise = StockService.getStocks();
      $httpBackend.flush();

      promise.then(function(result) {
        expect(result).toEqual([]);
      });
    });

    it('`getStocks` should only do one $http request, then cache', inject(function($q) {
      $httpBackend.when('GET', /query\.yahooapis\.com\/v1\/public\/yql\?q\=/).respond(mockResponse);

      var promise = StockService.getStocks();
      $httpBackend.flush();

      promise.then(function(result) {
        expect(result).toEqual([]);
      });

      spyOn($q, 'when').and.callThrough();

      // Data is cached, so there is no need to flush the $httpBackend
      promise = StockService.getStocks();
      promise.then(function(result) {
        expect(result).toEqual([]);
        expect($q.when).toHaveBeenCalled();
      });
    }));
  });
});
