describe('Unit: App', function() {
  beforeEach(module('app'));
  beforeEach(module('ui.router'));

  describe('App Abstract Route', function() {
    var $state,
      $rootScope,
      $urlRouter,
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
    });

    it('should redirect to /home on undefined state change', function () {
      $state.go('updates');
      $rootScope.$digest();
      $location.path('doesNotExist');
      $rootScope.$digest();
      expect($state.current.name).toEqual('home');
    })
  });
});
