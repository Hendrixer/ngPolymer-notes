(function(angular){
  "use strict";
  angular.module('note.directive', [])

  .directive('noteCard', [function(){
    return {
      restrict: 'EA',
      scope: {},
      template: '',
      link: function(scope, el, attrs){
        el.bind('mouseenter', function(e){

        });
      },
      transclude: true,
      replace: true
    };
  }]);
}(angular));