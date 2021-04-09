(function () {
    'use strict';

    let app = angular.module('DataApp');
    app.controller('MenuItemsController', MenuItemsController);

    MenuItemsController.$inject = ['items'];
    function MenuItemsController(items) {
        let menuItemsController = this;
        menuItemsController.items = items;
    }

})();
