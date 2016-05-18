function config($stateProvider) {
  $stateProvider
    .state('portfolios', {
      url: '/portfolios',
      template: [
        '<div class="mdl-grid">',
          '<portfolio-list class="mdl-cell--4-col"></portfolio-list>',
          '<portfolio-details class="mdl-cell--4-col"></portfolio-details>',
          '<div class="mdl-cell--4-col">',
            '<active-portfolios></active-portfolios>',
            '<portfolios-by-risk></portfolios-by-risk>',
          '</div>',
          '<ui-view class="mdl-cell--12-col"></ui-view>',
        '</div>'
      ].join('')
    })
    .state('portfolios.performance', {
      url: '/performance',
      template: '<performance></performance>'
    });
}

angular.module('portfolios', [
  'portfolioList',
  'portfolioDetails',
  'portfoliosByRisk',
  'activePortfolios'
])
  .config(config);
