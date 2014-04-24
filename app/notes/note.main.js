(function(angular){
  "use strict";
  angular.module('app.notes',
    [
      'notes.controller',
      'notes.factory',
      'ui.router'
    ])
  .config(function ($stateProvider, $urlRouterProvider){
    $stateProvider.
      state('main.note', {
        parent: 'main',
        templateUrl: 'notes/notes.html',
        controller: 'NoteController'
      });
  });
}(angular));