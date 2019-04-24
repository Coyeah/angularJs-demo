(function() {
  'use strict';

  angular
    .module('angularJsDemo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {                             // 路由名称，用于给 state.go 识别
        url: '/login',                              // 路由路径
        templateUrl: 'app/login/login.html',        // html 模板路径
        controller: 'LoginController',              // controller 字符串名称，用于在依赖注入中识别
        controllerAs: 'login'                       // controller 别名
      });
    $stateProvider
      .state('app', {
        abstract: true,                             // 抽象模板，用于工程化结构
        url: '/app',
        templateUrl: 'app/app.html',
        controller: 'AppController',
        controllerAs: 'main',
        resolve: {                                 // 类似 promise，校验是否通过判断进入派生模板
          login: function ($cookies, $rootScope, $state, toastr) {
            if (!$cookies.get('token') && $rootScope.user) {
              toastr.info("登录失效，请重新登录");
              throw {type: 'token-invalid'};
            } else if ($cookies.get('token')) {
              $rootScope.user = {
                username: $cookies.get('token')
              };
            }
            return true;
          }
        }
      })
      .state('app.home', {
        url: '/home',
        views: {                                    // 视图引入
          top: {
            templateUrl: 'app/main/top/top.html',
            controller: 'TopController',
          },
          left: {
            templateUrl: 'app/main/left/left.html',
            controller: 'LeftController',
          },
          right: {
            templateUrl: 'app/main/right/right.html',
            controller: 'RightController',
          }
        }
      })

    $urlRouterProvider.otherwise('/login');
  }

})();
