'use strict'

angular.module('angularJsDemo').filter('format', function() {
    return function(date) {
      var temp = date.split(' ');
      var now = moment().format('YYYY-MM-DD');
      if (now == temp[0]) {
        temp.shift();
      }
      return temp.join(' ');
    }
});
