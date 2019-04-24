(function () {
  'use strict';

  angular
    .module('angularJsDemo')
    .controller('RightController', RightController);

  /** @ngInject */
  function RightController($scope, toastr, $cookies, $rootScope, $state, $http) {
    $scope.getList = function () {
      $http.post("https://easy-mock.com/mock/5a3c66030df23b51b3614915/angular-less/kefu/msg/list#!method=post")
        .then(function (response) {
          $rootScope.chatRecords = response.data.data;
        });
    }
    $scope.getList();
    $scope.input = {
      msg: ""
    };
    $scope.send = function() {
      if(!$scope.input.msg){
        toastr.info("请输入内容");
        return;
      }
      if (!$rootScope.chatRecords) $rootScope.chatRecords = [];
      var newMsg = {
        id: 1900,
        content: {
          msgId: "pc" + new Date().getTime(),
          userInfo: {
            name: "coco",
            userId: "1000_1578",
            head:
              "http://hs-album-test.oss.aliyuncs.com/static/94/3b/5f/image/20170418/20170418161825_15009.jpg",
            userType: "pc"
          },
          body: {
            message: $scope.input.msg,
            type: "text"
          }
        },
        createTime: moment().format("YYYY-MM-DD HH:mm:ss"),
        fromFans: false,
        cusName: "coco",

        msgType: "text",
        cusId: 1578
      };
      $rootScope.chatRecords.push(newMsg);
      $scope.input.msg = '';
    }
    $scope.goToDown = function () {
      var chatList = document.getElementById('chat-list');
      chatList.scrollTop = chatList.scrollHeight;
    }
    $scope.$on('ngRepeatFinished', function () {
      $scope.goToDown();
    });
  }
})();
