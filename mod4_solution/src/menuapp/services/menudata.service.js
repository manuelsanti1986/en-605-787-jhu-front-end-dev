(function () {
    'use strict';

    let app = angular.module('DataApp', []);
    app.service('MenuDataService', MenuDataService);
    app.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    MenuDataService.$inject = ['$q', '$http', 'ApiBasePath'];
    function MenuDataService($q, $http, ApiBasePath) {
        let service = this;
        let items = [];

        // Pre-populate a no cookie list
        items.push({
            name: "Sugar",
            quantity: "2 bags",
            description: "Sugar used for baking delicious umm... baked goods."
        });
        items.push({
            name: "flour",
            quantity: "1 bags",
            description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
        });
        items.push({
            name: "Chocolate Chips",
            quantity: "3 bags",
            description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
        });

        // Simulates call to server
        // Returns a promise, NOT items array directly
        service.getAllCategories = function () {
            let response = $http({
                method: 'GET',
                url: (ApiBasePath + '/categories.json')
            }).then(function (response) {
                return response;
            })
            .catch(function (err) {
                return `Error: Unable to get items. ${err}`
            });
            return response;
        };

        service.getItemsForCategory = function (categoryShortName) {
            let response = $http({
                method: 'GET',
                url: (ApiBasePath + `/menu_items.json?category=${categoryShortName}`)
            }).then(function (response) {
                return response;
            })
                .catch(function (err) {
                    return `Error: Unable to get items. ${err}`
                });
            return response;
        };

    }

})();
