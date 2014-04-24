(function(angular){
  angular.module('app', ['app.notes', 'app.controller','ui.router'])

  .config(function ($stateProvider, $urlRouterProvider){
    $stateProvider.
      state('main', {
        abstract: true,
        url: '/',
        templateUrl: 'main.html'
      });
  });
}(angular));