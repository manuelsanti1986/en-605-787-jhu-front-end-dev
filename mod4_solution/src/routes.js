(function () {
    'use strict';

    angular.module('ShoppingList')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/restaurantmenu/templates/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/restaurantmenu/templates/main-shoppinglist.template.html',
                controller: 'MainShoppingListController as mainList',
                resolve: {
                    items: ['ShoppingListService', function (ShoppingListService) {
                        return ShoppingListService.getItems();
                    }]
                }
            })
            .state('mainList.itemDetail', {
                url: '/item-detail/{itemId}',
                templateUrl: 'src/restaurantmenu/templates/item.template.html',
                controller: "ItemDetailController as itemDetail"
            });
    }
})();
