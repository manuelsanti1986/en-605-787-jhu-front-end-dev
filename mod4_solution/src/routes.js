(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/menuapp/templates/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menuapp/templates/main-shoppinglist.template.html',
                controller: 'ItemController as menuItems',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('mainList.itemDetail', {
                url: '/items/{categoryShortName}',
                templateUrl: 'src/menuapp/templates/item.template.html',
                controller: "ItemController as menuItems"
            });
    }
})();
