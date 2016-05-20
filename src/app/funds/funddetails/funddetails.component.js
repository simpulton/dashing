var funddetails = {
  selector: 'funddetails',
  bindings: {
    name: '@',
    select: '&'
  },
  controller: 'FunddetailsController',
  templateUrl: 'funds/funddetails/funddetails.html'
};

angular.module('funddetails')
  .component('funddetails', funddetails);
