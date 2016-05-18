function config($stateProvider) {
  $stateProvider
    .state('stocks', {
      url: '/stocks',
      template: [
        '<div class="mdl-grid">',
          '<performance class="mdl-cell--12-col"></performance>',
          '<stock-history class="mdl-cell--8-col"></stock-history>',
          '<symbols class="mdl-cell--4-col"></symbols>',
        '</div>'
      ].join('')
    });
}

angular.module('stocks', [
  'symbols',
  'stockHistory'
])
.config(config)
