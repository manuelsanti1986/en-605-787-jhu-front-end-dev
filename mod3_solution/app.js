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
                isEmptySearch: '<',
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
        scope.$watch('narrowItDown.isEmptyResponse()', function (newValue, oldValue) {
            if (newValue) {
                displayEmptySearchWarning();
            }
            else {
                removeEmptySearchWarning();
            }
        });

        function displayEmptySearchWarning() {
            let warningElem = element.find("div.error");
            warningElem.show();
        }

        function removeEmptySearchWarning() {
            let warningElem = element.find('div.error');
            warningElem.hide();
        }
    }

    function NarrowItDownDirectiveController() {
        let narrowItDown = this;

        narrowItDown.isEmptyResponse = function () {
            return narrowItDown.isEmptySearch;
        };
    }

    NarrowItDownController.$inject = ['MenuItemsFactory'];
    function NarrowItDownController(MenuItemsFactory) {
        let narrowItDown = this;
        let menuItemsFactory = MenuItemsFactory();

        narrowItDown.searchTerm = "";
        narrowItDown.found = menuItemsFactory.getMenuItems();
        narrowItDown.isEmptySearch = menuItemsFactory.getIsEmptySearch();

        narrowItDown.getFilteredItems = function(){
            let filteredItemsPromise = menuItemsFactory.getMatchedMenuItems(narrowItDown.searchTerm);
            filteredItemsPromise
                .then(function (){
                    narrowItDown.found = menuItemsFactory.getMenuItems();
                    narrowItDown.isEmptySearch = menuItemsFactory.getIsEmptySearch();
                })
                .catch(function (error){
                    console.log("Error: " + error)
                });
        };

        narrowItDown.removeMenuItem = function (itemIndex) {
            menuItemsFactory.removeMenuItem(itemIndex);
            narrowItDown.found = menuItemsFactory.getMenuItems();
        };

    }

    function MenuSearchService($http, ApiBasePath){
        let service = this;
        let filteredItems = [];
        let isEmptyResponse = false;

        service.getMatchedMenuItems = function (searchTerm) {
            let response = $http({
                method: 'GET',
                url: (ApiBasePath + '/menu_items.json')
            }).then(function (response) {
                if(searchTerm) {
                    filteredItems = response.data.menu_items.filter(function (items) {
                        return items.description.indexOf(searchTerm) !== -1;
                    });
                }else {
                    filteredItems = [];
                }
                isEmptyResponse = (filteredItems.length === 0);
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

        service.getIsEmptySearch = function () {
            return isEmptyResponse;
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

