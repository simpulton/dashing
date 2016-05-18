var home = {
  selector: 'home',
  bindings: {},
  controller: 'HomeController',
  templateUrl: 'home/home.html'
}

angular.module('home')
  .component('home', home);
