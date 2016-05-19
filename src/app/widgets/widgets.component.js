var widgets = {
  selector: 'widgets',
  bindings: {},
  controller: 'WidgetsController',
  templateUrl: 'widgets/widgets.html'
}

angular.module('widgets')
  .component('widgets', widgets);
