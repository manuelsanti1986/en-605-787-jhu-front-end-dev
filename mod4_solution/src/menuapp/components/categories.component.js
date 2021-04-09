(function () {
    'use strict';

    let app = angular.module('MenuApp');
    app.component('menuCategories', {
        templateUrl: 'src/menuapp/templates/categories.template.html',
        bindings: {
            categories: '<'
        }
    });
})();
