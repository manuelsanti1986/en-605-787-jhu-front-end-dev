(function () {
    'use strict';

    let app = angular.module('DataApp');
    app.controller('MenuItemsController', MenuItemsController);

    MenuItemsController.$inject = ['$stateParams', 'MenuDataService'];
    function MenuItemsController($stateParams, MenuDataService, items, isEmptyItemsResponse) {
        let menuItemsController = this;

        let menuItemsPromise = MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        menuItemsPromise
            .then(function (items){
                menuItemsController.items = items;
                menuItemsController.isEmptyItemsResponse = MenuDataService.getIsEmptyItemsResponse();
            })
            .catch(function (error){
                console.log("Error: " + error)
            });


    }

})();
