(function () {
    'use strict';

    let app = angular.module('NarrowItDownApp', []);
    app.controller('NarrowItDownController', NarrowItDownController);
    app.factory('MenuItemsFactory', MenuItemsFactory)
    app.directive('foundItems', FoundItemsDirective);
    app.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'menuItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownDirectiveController,
            controllerAs: 'narrowItDown',
            bindToController: true,
            link: NarrowItDownDirectiveLink,
            transclude: true
        };
        return ddo;
    }

    function NarrowItDownDirectiveLink(scope, element, attrs, controller) {
        console.log("Link scope is: ", scope);
        console.log("Controller instance is: ", controller);
        console.log("Element is: ", element);

        scope.$watch('narrowItDown.isMenuEmpty()', function (newValue, oldValue) {
            console.log("Old value isEmpty: ", oldValue);
            console.log("New value isEmpty: ", newValue);

            if (newValue) {
                displayEmptyMenuWarning();
            }
            else {
                removeEmptyMenuWarning();
            }
        });

        function displayEmptyMenuWarning() {
            let warningElem = element.find("div.error");
            warningElem.show();
        }

        function removeEmptyMenuWarning() {
            let warningElem = element.find('div.error');
            warningElem.hide();
        }
    }

    function NarrowItDownDirectiveController() {
        let narrowItDown = this;

        narrowItDown.isMenuEmpty = function () {
            return (!narrowItDown.items || narrowItDown.items.length > 0)? false : true;
        };
    }

    NarrowItDownController.$inject = ['MenuItemsFactory'];
    function NarrowItDownController(MenuItemsFactory) {
        let narrowItDown = this;
        let menuItemsFactory = MenuItemsFactory();

        narrowItDown.searchTerm = "";
        narrowItDown.found = menuItemsFactory.getMenuItems();

        narrowItDown.getFilteredItems = function(){
            let filteredItemsPromise = menuItemsFactory.getMatchedMenuItems(narrowItDown.searchTerm);
            filteredItemsPromise
                .then(function (){
                    narrowItDown.found = menuItemsFactory.getMenuItems();
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

    function MenuSearchService($http, ApiBasePath){
        let service = this;
        let filteredItems = undefined;

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

