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