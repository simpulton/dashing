function FundsController(FundsService) {
  console.log('FundsController');

  var $ctrl = this;

  $ctrl.fundName = '401KAAAAAAY!';
  $ctrl.selectFund = function() {
    alert('SELECTED!');
  }

  FundsService.all()
    .then(function(data){
      $ctrl.funds = data;
    })
}

angular.module('funds')
  .controller('FundsController', FundsController);
