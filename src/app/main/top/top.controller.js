(function () {
  'use strict';

  angular
    .module('angularJsDemo')
    .controller('TopController', TopController);

  /** @ngInject */
  function TopController($scope, toastr, $cookies, $rootScope, $state) {
    $scope.logout = function () {
      $cookies.remove("token");
      $state.go("login");
    }
  }
})();
