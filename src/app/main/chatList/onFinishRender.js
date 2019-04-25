'use strict'

angular.module('angularJsDemo').directive('onFinishRender', ['$rootScope', '$interval', 'Utils', '$timeout',
  function($rootScope, $interval, Utils, $timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function() {
            scope.$emit('ngRepeatFinished');
          });
        }
      }
    }
  }
]);
