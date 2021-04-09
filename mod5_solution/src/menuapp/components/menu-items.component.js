(function () {
    'use strict';

    let app = angular.module('DataApp');
    app.component('menuItems', {
        templateUrl: 'src/menuapp/templates/menu-item.template.html',
        bindings: {
            items: '<'
        }
    });
})();
