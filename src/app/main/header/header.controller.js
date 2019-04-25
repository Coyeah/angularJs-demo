(function () {
  'use strict';

  angular
    .module('angularJsDemo')
    .controller('HeaderController', HeaderController);

  /** @ngInject */
  function HeaderController($scope, toastr, $cookies, $rootScope, $state) {
    $scope.logout = function () {
      $cookies.remove("token");
      $state.go("login");
    }
  }
})();
