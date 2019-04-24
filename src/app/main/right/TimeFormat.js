'use strict'

angular.module('angularJsDemo').filter('timeFormat', function() {
    return function(date) {
      var temp = date.split(' ');
      temp[0] = temp[0].split('-').join('/');
      var now = moment().format('YYYY/MM/DD');
      if (now == temp[0]) {
        temp.shift();
      }
      return temp.join(' ');
    }
});
