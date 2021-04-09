(function () {
    'use strict';

    let app = angular.module('MenuApp');
    app.config(RoutesConfig);
    // let app = angular.module('MenuApp', ['ui.router']);
    // angular.module('MenuApp', [])
    // app.config(RoutesConfig);


    // RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    // function RoutesConfig($stateProvider, $urlRouterProvider) {\
    RoutesConfig.$inject = ['$stateProvider'];
    function RoutesConfig($stateProvider) {
    //     $urlRouterProvider.otherwise('/');
    //     $stateProvider
    //         .state('home', {
    //             url: '/',
    //             templateUrl: 'src/menuapp/templates/home.template.html'
    //         });
    //         // .state('categories', {
    //         //     url: '/categories',
    //         //     templateUrl: 'src/menuapp/templates/main-shoppinglist.template.html',
    //         //     controller: 'CategoriesController as categoriesController',
    //         //     resolve: {
    //         //         categories: ['MenuDataService', function (MenuDataService) {
    //         //             return MenuDataService.getAllCategories();
    //         //         }]
    //         //     }
    //         // })
    //         // .state('mainList.itemDetail', {
    //         //     url: '/items/{categoryShortName}',
    //         //     templateUrl: 'src/menuapp/templates/item.template.html',
    //         //     controller: "MenuItemsController as menuItems"
    //         // });
    }
})();
