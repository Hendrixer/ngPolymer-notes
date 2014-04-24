(function(angular){
  "use strict";
  angular.module('notes.controller', [])

  .controller('NoteController', ['$scope', '$state', function($scope, $state){
    $scope.main = {};
    $state.go('main.note');
  }]);
}(angular));