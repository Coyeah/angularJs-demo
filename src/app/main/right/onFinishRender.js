'use strict'

angular.module('angularJsDemo').directive('onFinishRender', ['$rootScope', '$interval', 'Utils', '$timeout',
  function($rootScope, $interval, Utils, $timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function() {
            scope.$emit('ngRepeatFinished'); //事件通知
            // var fun = $scope.$eval(attrs.onFinishRender);
            // if (fun && typeof(fun) == 'function') {
            //   fun(); //回调函数
            // }
          });
        }
      }
    }
  }
]);
