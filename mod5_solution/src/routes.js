(function () {
    'use strict';

    let app = angular.module('MenuApp');
    app.config(RoutesConfig);

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
                templateUrl: 'src/menuapp/templates/main-categories.template.html',
                controller: 'CategoriesController as categoriesController',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('itemDetails', {
                url: '/item-details/{categoryShortName}',
                templateUrl: 'src/menuapp/templates/main-menu-items.template.html',
                controller: "MenuItemsController as menuItems",
                resolve: {
                    items: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                            .then(function (items){
                                    return items;
                            });
                    }]
                }
            });
    }
})();
