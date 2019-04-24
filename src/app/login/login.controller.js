(function() {
  'use strict';

  angular
    .module('angularJsDemo')
    .controller('LoginController', LoginController)

  /** @ngInject */
  function LoginController($scope, toastr, $cookies, $rootScope, $state) {
    // var vm = this;

    $scope.input = {
      username: 'Coyeah',
      password: '123456'
    }

    $scope.clickLogin=function(){
      var ret = checkInput();
      if (ret){
        toastr.error(ret, null, {preventDuplicates: false});
        return;
      }
      $cookies.put("token", $scope.input.username);
      $rootScope.user = {
        username: $scope.input.username
      };
      $state.go('app.home');
    }

    function checkInput(){
      if(!$scope.input.username){
        return "请输入用户名";
      }
      if(!$scope.input.password){
        return "请输入密码";
      }
      return "";
    }
  }
})();
