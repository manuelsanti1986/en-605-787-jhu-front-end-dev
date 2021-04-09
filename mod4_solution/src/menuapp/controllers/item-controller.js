(function () {
    'use strict';

    let app = angular.module('DataApp', []);
    app.controller('ItemController', ItemController);

    ItemController.$inject = ['MenuDataService', 'items'];
    function ItemController(MenuDataService, items) {
        var mainlist = this;
        mainlist.items = items;
    }

})();
