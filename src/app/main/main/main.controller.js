(function () {
  'use strict';

  angular
    .module('angularJsDemo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, toastr, $cookies, $rootScope, $state, $http) {
    $scope.goToDown = function () {
      var chatList = document.getElementById('chat-list');
      chatList.scrollTop = chatList.scrollHeight;
    }
    $scope.$on('ngRepeatFinished', function () {
      $scope.goToDown();
    });
  }
})();
