(function () {
    'use strict';

    let app = angular.module('DataApp', []);
    app.service('MenuDataService', MenuDataService);
    app.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

    MenuDataService.$inject = ['$q', '$http', 'ApiBasePath'];
    function MenuDataService($q, $http, ApiBasePath) {
        let service = this;
        let categories = [];
        let items = [];

        service.getAllCategories = function () {
            let response = $http({
                method: 'GET',
                url: (ApiBasePath + '/categories.json')
            }).then(function (response) {
                categories = response;
                return categories;
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
                items = response.menu_items ? response.menu_items : [];
                return items;
            })
                .catch(function (err) {
                    return `Error: Unable to get items. ${err}`
                });
            return response;
        };

    }

})();
