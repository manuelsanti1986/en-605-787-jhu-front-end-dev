(function () {
    'use strict';

    let app = angular.module('MenuApp');
    app.component('menuCategories', CategoriesComponent);

    let CategoriesComponent = {
        templateUrl: 'src/menuapp/templates/categories.template.html',
        bindings: {
            categories: '<'
        }
    }
})();
