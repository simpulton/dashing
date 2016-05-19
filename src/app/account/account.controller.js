function AccountController() {
  $ctrl = this;
  $ctrl.currentAccount = {
    title: 'My current account yo!',
    description: 'This is a description',
    active: true,
    total: 10000000000000
  }

  $ctrl.kickTheJams = kickTheJams;
  $ctrl.showAccount = showAccount;
  $ctrl.isShown = $ctrl.showAccount($ctrl.currentAccount);

  //

  function kickTheJams (jam) {
    alert('DANCE PARTY WITH' + jam + '!');
  }

  function showAccount (account) {
    return account.active && account.total > 1000;
  }


}

angular.module('account')
  .controller('AccountController', AccountController);