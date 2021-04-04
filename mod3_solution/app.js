(function () {
    'use strict';

    let app = angular.module('NarrowItDownApp', []);

    app.controller('NarrowItDownController', NarrowItDownController);
    app.factory('MenuItemsFactory', MenuItemsFactory)
    // app.directive('foundItems', FoundItemsDirective);
    app.filter('myCurrency', MyCurrencyFilter);
    app.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    NarrowItDownController.$inject = ['MenuItemsFactory'];
    function NarrowItDownController (MenuItemsFactory) {
        let narrowItDown = this;
        let menuItemsFactory = MenuItemsFactory();
        let found = [];

        narrowItDown.getFilteredItems = function(){
            let filteredItemsPromise = menuItemsFactory.getMatchedMenuItems("chicken-stuffed");
            filteredItemsPromise
                .then(function (filteredItems){
                    narrowItDown.found = filteredItems;
                    console.log("THEN! found")
                    console.log(narrowItDown.found)
                })
                .catch(function (error){
                    console.log("Error: " + error)
                });
        };

        narrowItDown.removeItem = function (itemIndex) {
            console.log("'this' is: ", this);
            menuItemsFactory.removeItem(itemIndex);
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
                let filteredItems = response.data.menu_items.filter(function (items) {
                    return items.description.indexOf(searchTerm) !== -1;
                });
                return filteredItems;
            });
            return response;
        };

        service.removeItem = function (itemIndex) {
            if(filteredItems.length > 0) {
                filteredItems.splice(itemIndex, 1);
            }
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

