(function () {
    'use strict';

    let app = angular.module('MenuApp');
    app.component('menuItems', {
        templateUrl: 'src/menuapp/templates/menu-item.template.html',
        bindings: {
            items: '<'
        }
    });

    // let MenuItemsComponent = {
    //     templateUrl: 'src/menuapp/templates/menu-item.template.html',
    //     bindings: {
    //         items: '<'
    //     }
    // }
})();
