(function () {
    'use strict';

    let app = angular.module('NarrowItDownApp', []);

    app.controller('NarrowItDownController', NarrowItDownController);
    app.filter('myCurrency', MyCurrencyFilter);
    app.service('MenuSearchService', MenuSearchService);
    app.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController (MenuSearchService) {
        let narrowItDown = this;

        narrowItDown.getFilteredItems = function(){
            let filteredItemsPromise = MenuSearchService.getMenuItems("chicken-stuffed");
            filteredItemsPromise
                .then(function (filteredItems){
                    console.log("THEN! filteredItems")
                    console.log(filteredItems)
                    return filteredItems;
                })
                .catch(function (error){
                    console.log("Error: " + error)
                });
        };
    };

    function MyCurrencyFilter(){
        return function(input) {
            input = ("$$" + input) || "";
            return input;
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath){
        let service = this;

        service.getMenuItems = function (searchTerm) {
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
    }

})();
