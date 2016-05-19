describe('Unit: App', function() {
  beforeEach(module('app'));

  describe('App Abstract Route', function() {
    var $state,
      $rootScope,
      $location,
      state = 'app';

    beforeEach(inject(function(_$state_, $templateCache, _$rootScope_, _$location_) {
      $state = _$state_;
      $rootScope = _$rootScope_;
      $location = _$location_;
    }));

    it('verifies state configuration', function() {
      var config = $state.get(state);
      expect(config.abstract).toBeTruthy();
      expect(config.url).toBeUndefined();
      expect(config.template).toBeUndefined();
    });

    it('should navigate to /home by default', function () {
      $state.go('app.otherChild');
      $rootScope.$digest();
      $location.path('doesNotExist');
      $rootScope.$digest();
      expect($state.current.name).toEqual('app.child');
    });
  });
});
