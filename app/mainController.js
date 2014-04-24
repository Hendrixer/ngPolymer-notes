(function(angular){
  angular.module('app.controller', [])
  .controller('MainController', ['$state', function($state){
    $state.go('main.note');
  }]);
}(angular));