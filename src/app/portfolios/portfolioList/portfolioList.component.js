var portfolioList = {
  selector: 'portfolioList',
  bindings: {
    portfolios: '<',
    select: '&',
    delete: '&'
  },
  controller: 'PortfolioListController',
  templateUrl: 'portfolios/portfolioList/portfolioList.html'
}

angular.module('portfolioList')
  .component('portfolioList', portfolioList);
