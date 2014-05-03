(function(angular){
  "use strict";
  angular.module('notes.controller', [])

  .controller('NoteController', ['$scope', '$state', function($scope, $state){
    $scope.main = {};
    $state.go('main.note');
  }]);
}(angular));
(function(angular){
  "use strict";
  angular.module('notes.factory', [])
  .factory('Note', ['$http', function($http){
    return {
      fetch: function(){
        return $http({
          method: 'GET',
          url: '/note'
        });
      },
      save: function(note){
        return $http({
          method: 'POST',
          url: '/note',
          data: note
        });
      },
      destroy: function(note){
        return $http({
          method: 'DELETE',
          url: '/note',
          params: note._id
        });
      }
    };
  }]);
}(angular));
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
(function(angular){
  angular.module('app.controller', [])
  .controller('MainController', ['$state', function($state){
    $state.go('main.note');
  }]);
}(angular));
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