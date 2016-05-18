var portfolioList = {
  selector: 'portfolioList',
  bindings: {},
  controller: 'PortfolioListController',
  templateUrl: 'portfolios/portfolioList/portfolioList.html'
}

angular.module('portfolioList')
  .component('portfolioList', portfolioList);
