(function () {
    'use strict';

    let app = angular.module('NarrowItDownApp', []);
    app.controller('NarrowItDownController', NarrowItDownController);
    app.factory('MenuItemsFactory', MenuItemsFactory)
    app.directive('foundItems', FoundItemsDirective);
    app.filter('myCurrency', MyCurrencyFilter);
    app.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'menuItems.html',
            scope: {
                items: '<',
                alertMessage: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            bindToController: true,
            controllerAs: 'narrowItDown',
            transclude: true
        };
        return ddo;
    }

    NarrowItDownController.$inject = ['MenuItemsFactory'];
    function NarrowItDownController(MenuItemsFactory) {
        let narrowItDown = this;
        let menuItemsFactory = MenuItemsFactory();

        narrowItDown.searchTerm = "";
        narrowItDown.found = menuItemsFactory.getMenuItems();
        narrowItDown.alertMessage = "";

        narrowItDown.getFilteredItems = function(){
            let filteredItemsPromise = menuItemsFactory.getMatchedMenuItems(narrowItDown.searchTerm);
            filteredItemsPromise
                .then(function (){
                    narrowItDown.found = menuItemsFactory.getMenuItems();
                    narrowItDown.alertMessage = (narrowItDown.found.length > 0) ? "" : "Nothing Found";
                    console.log(narrowItDown.alertMessage)
                })
                .catch(function (error){
                    console.log("Error: " + error)
                });
        };

        narrowItDown.removeMenuItem = function (itemIndex) {
            menuItemsFactory.removeMenuItem(itemIndex);
            narrowItDown.found = menuItemsFactory.getMenuItems();
        };

    };

    function MyCurrencyFilter(){
        return function(input) {
            input = ("$$" + input) || "";
            return input;
        };
    }

    function MenuSearchService($http, ApiBasePath){
        let service = this;
        let filteredItems = [];

        service.getMatchedMenuItems = function (searchTerm) {
            let response = $http({
                method: 'GET',
                url: (ApiBasePath + '/menu_items.json')
            }).then(function (response) {
                filteredItems = response.data.menu_items.filter(function (items) {
                    return items.description.indexOf(searchTerm) !== -1;
                });
                return filteredItems;
            })
            .catch(function (err) {
                return `Error: Unable to get items. ${err}`
            });
            return response;
        };

        service.removeMenuItem = function (itemIndex) {
            if(filteredItems.length > 0) {
                filteredItems.splice(itemIndex, 1);
            }
            return filteredItems;
        };

        service.getMenuItems = function () {
            return filteredItems;
        };
    }

    MenuItemsFactory.$inject = ['$http', 'ApiBasePath'];
    function MenuItemsFactory($http, ApiBasePath) {
        var factory = function () {
            return new MenuSearchService($http, ApiBasePath);
        };
        return factory;
    }

})();

