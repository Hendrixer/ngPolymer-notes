(function(angular){
  "use strict";
  angular.module('notes.controller', [])

  .controller('NoteController', ['$scope',function($scope){
    $scope.main = {};
  }]);
}(angular));
(function(angular){
  "use strict";
  angular.module('notes.factory', [])
  .factory('NoteFactory', ['$http', function($http){
    return {
      all: function(){
        return $http({
          method: 'GET',
          url: '/note'
        });
      },
      make: function(note){
        return $http({
          method: 'POST',
          url: '/note',
          data: note
        });
      },
      remove: function(note){
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
      'notes.factory'
    ]);
}(angular));
(function(angular){
  angular.module('app', ['app.notes']);
}(angular));