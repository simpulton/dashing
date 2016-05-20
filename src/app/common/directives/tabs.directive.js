function tab() {
	return {
  	restrict: 'E',
    scope: {
    	label: '@'
    },
    require: '^tabs',
    transclude: true,
    template: `
    	<div ng-if="tab.selected">
      	<div ng-transclude></div>
      </div>`,
    link: function ($scope, $element, $attrs, $ctrl) {
    	$scope.tab = {
      	label: $scope.label,
      	selected: false
      };
    	$ctrl.addTab($scope.tab);
    }
  }
}

function tabs() {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      controller: function () {
				var $ctrl = this;
      	$ctrl.tabs = [];
        $ctrl.addTab = function addTab(tab) {
        	$ctrl.tabs.push(tab);
        };
        $ctrl.selectTab = function selectTab(index) {
          for (var i = 0; i < $ctrl.tabs.length; i++) {
            $ctrl.tabs[i].selected = false;
          }
        	$ctrl.tabs[index].selected = true;
        };
      },
      controllerAs: 'tabs',
      link: function ($scope, $element, $attrs, $ctrl) {
      	$ctrl.selectTab($attrs.active || 0);
      },
      template: `
      	<div class="mdl-tabs is-upgraded">
        	<div class="mdl-tabs__tab-bar">
          	<a ng-class="{'is-active': tab.selected}" ng-repeat="tab in tabs.tabs" class="mdl-tabs__tab" href="" ng-bind="tab.label" ng-click="tabs.selectTab($index);"></a>
          </div>
        	<div class="tabs__content" ng-transclude></div>
        </div>
      `
    };
}

angular
	.module('common')
  .directive('tab', tab)
  .directive('tabs', tabs);
