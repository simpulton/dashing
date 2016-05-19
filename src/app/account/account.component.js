var account = {
  selector: 'account',
  bindings: {},
  controller: 'AccountController',
  templateUrl: 'account/account.html'
};

angular.module('account')
  .component('account', account);