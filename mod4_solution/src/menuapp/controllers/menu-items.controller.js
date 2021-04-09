(function () {
    'use strict';

    let app = angular.module('DataApp', []);
    app.controller('MenuItemsController', MenuItemsController);

    MenuItemsController.$inject = ['MenuDataService', 'items', 'isEmptyItemsResponse'];
    function MenuItemsController(MenuDataService, items, isEmptyItemsResponse) {
        let self = this;
        self.items = items;
        self.isEmptyItemsResponse = isEmptyItemsResponse;
    }

})();
