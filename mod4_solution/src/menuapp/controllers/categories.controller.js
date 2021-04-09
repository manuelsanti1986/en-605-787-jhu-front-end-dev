(function () {
    'use strict';

    let app = angular.module('DataApp', []);
    app.controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService', 'categories'];
    function CategoriesController(MenuDataService, categories) {
        let self = this;
        self.categories = categories;
    }

})();
