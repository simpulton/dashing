function AccountController() {
  $ctrl = this;
  $ctrl.currentAccount = {
    title: 'My current account yo!',
    description: 'This is a description'
  }

  $ctrl.kickTheJams = function(jam) {
    alert('DANCE PARTY WITH' + jam + '!');
  };
}

angular.module('account')
  .controller('AccountController', AccountController);