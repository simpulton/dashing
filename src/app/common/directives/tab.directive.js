function tab() {
	return {
  	restrict: 'E',
    scope: {
    	label: '@'
    },
    require: '^tabs',
    transclude: {
			title: 'heading',
			content: 'content'
		},
    template: [
    	'<div ng-if="tab.selected">',
			'	<div class="mdl-card__title">',
			'		<h2 ng-transclude="title" class="mdl-card__title-text"></h2>',
			'	</div>',
			'	<div class="mdl-card__supporting-text">',
      '		<div ng-transclude="content"></div>',
			'	</div>',
      '</div>'
		].join(''),
    link: function ($scope, $element, $attrs, $ctrl) {
    	$scope.tab = {
      	label: $scope.label,
      	selected: false
      };
    	$ctrl.addTab($scope.tab);
    }
  }
}

angular
	.module('directives')
  .directive('tab', tab)
