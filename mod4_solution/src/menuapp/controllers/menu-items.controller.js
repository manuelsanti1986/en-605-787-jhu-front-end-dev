(function () {
    'use strict';

    let app = angular.module('MenuApp');
    app.controller('MenuItemsController', MenuItemsController);

    MenuItemsController.$inject = ['$stateParams', 'MenuDataService'];
    function MenuItemsController($stateParams, MenuDataService) {
        let menuItemsController = this;

        let menuItemsPromise = MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        menuItemsPromise
            .then(function (items){
                menuItemsController.items = items;
            })
            .catch(function (error){
                console.log("Error: " + error)
            });
    }

})();
