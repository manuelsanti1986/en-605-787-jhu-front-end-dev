(function () {
"use strict";

angular.module('public')
.component('menuItem', {
  templateUrl: 'src/public/menu-item/menu-item.html',
  bindings: {
    menuItem: '<'
  }
})
.filter('getCategory', function() {
  return function(text) {
    return text.replace(/[^a-zA-Z]+/g, '');
  }
});

})();
