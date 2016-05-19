var accountDetails = {
  selector: 'accountDetails',
  bindings: {
    title: '@',
    account: '<',
    dance: '&'
  },
  templateUrl: 'account/accountDetails/accountDetails.html'
};

angular.module('accountDetails')
  .component('accountDetails', accountDetails);
