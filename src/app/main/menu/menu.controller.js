(function () {
  'use strict';

  angular
    .module('angularJsDemo')
    .controller('MenuController', MenuController);

  /** @ngInject */
  function MenuController($scope, toastr, $cookies, $rootScope, $state) {
    $scope.getClientList = function () {
      var list = [];
      for (var i = 1; i < 10; i++) {
        list.push({
          name: '客户' + i,
          url: 'http://wx.qlogo.cn/mmopen/mfqZicYJ9fUicpyiaT6jNwgCEEEz0yqHev6ZaBIibrnyvJ44KqUJzXQZ97tNdRH2pKWkvOVmHYfEpQPhNLUOiaegQ9g/0'
        });
      }
      $scope.clientList = list;
      $scope.clientListLength = list.length;
    }

    $scope.getClientList();
  }
})();
