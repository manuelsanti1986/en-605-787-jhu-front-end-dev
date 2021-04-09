(function () {
    'use strict';

    let app = angular.module('DataApp');
    app.controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
        let categoriesController = this;
        categoriesController.categories = categories;
    }

})();
