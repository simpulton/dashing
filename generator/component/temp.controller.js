function <%= upCaseName %>Controller() {
  console.log('<%= upCaseName %>Controller');
}

angular.module('<%= name %>')
  .controller('<%= upCaseName %>Controller', <%= upCaseName %>Controller);
