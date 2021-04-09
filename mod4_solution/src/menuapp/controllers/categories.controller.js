(function () {
    'use strict';

    let app = angular.module('MenuApp');
    app.controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService', 'categories'];
    function CategoriesController(MenuDataService, categories) {
        let categoriesController = this;
        categoriesController.categories = categories;
    }

})();
