'use strict';

angular
  .module('angularJsDemo')
  .controller('ChatListController', ['$scope',  '$timeout', '$interval', '$rootScope', '$http',
    function ($scope, $timeout, $interval, $rootScope, $http) {
      $scope.getList = function () {
        $http.post("https://easy-mock.com/mock/5a3c66030df23b51b3614915/angular-less/kefu/msg/list#!method=post")
          .then(function (response) {
            $rootScope.chatRecords = response.data.data;
          });
      }
      $scope.getList();
    }
  ])
