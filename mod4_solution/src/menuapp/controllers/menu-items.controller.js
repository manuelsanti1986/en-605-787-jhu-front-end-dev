(function () {
    'use strict';

    let app = angular.module('DataApp', []);
    app.controller('MenuItemsController', MenuItemsController);

    MenuItemsController.$inject = ['MenuDataService', 'items', 'isEmptyItemsResponse'];
    function MenuItemsController(MenuDataService, items, isEmptyItemsResponse) {
        let menuItemsController = this;
        menuItemsController.items = items;
        menuItemsController.isEmptyItemsResponse = isEmptyItemsResponse;
    }

})();
