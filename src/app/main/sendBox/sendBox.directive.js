'use strict';

angular
  .module('angularJsDemo')
  .directive('sendBox', [
    function () {
      return {
        restrict: 'A',
        replace: true,
        controller: 'SendBoxController',
        templateUrl: '/app/main/sendBox/sendBox.html',
      }
    }
  ])
