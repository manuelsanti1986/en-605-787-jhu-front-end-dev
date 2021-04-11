(function () {
"use strict";

angular.module('public')
.component('menuItem', {
  templateUrl: 'src/public/menu-item/menu-item.html',
  bindings: {
    menuItem: '<'
  },
  controller: MenuItemController
})
.filter('getCategory', function() {
  return function(text) {
    return text.replace(/[^a-zA-Z]+/g, '');
  }
});


MenuItemController.$inject = ['ApiPath'];
function MenuItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  console.log("MenuItemController menuItem")
  console.log($ctrl)
}

})();
