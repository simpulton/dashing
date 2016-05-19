var portfolioDetails = {
  selector: 'portfolioDetails',
  bindings: {
    portfolio: '<',
    save: '&'
  },
  controller: 'PortfolioDetailsController',
  templateUrl: 'portfolios/portfolioDetails/portfolioDetails.html'
};

angular.module('portfolioDetails')
  .component('portfolioDetails', portfolioDetails);
