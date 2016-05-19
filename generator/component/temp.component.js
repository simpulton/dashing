var <%= name %> = {
  selector: '<%= name %>',
  bindings: {},
  controller: '<%= upCaseName %>Controller',
  templateUrl: '<%= templatePath %>/<%= name %>.html'
};

angular.module('<%= name %>')
  .component('<%= name %>', <%= name %>);
