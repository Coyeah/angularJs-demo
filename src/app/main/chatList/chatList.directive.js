'use strict';

angular
  .module('angularJsDemo')
  .directive('chatList', [
    function () {
      return {
        restrict: 'A',
        replace: true,
        controller: 'ChatListController',
        templateUrl: '/app/main/chatList/chatList.html',
      }
    }
  ])
