(function () {
    'use strict';

    let app = angular.module('MenuApp');
    app.component('menuItems', MenuItemsComponent);

    let MenuItemsComponent = {
        templateUrl: 'src/menuapp/templates/menu-item.template.html',
        bindings: {
            items: '<'
        }
    }
})();
