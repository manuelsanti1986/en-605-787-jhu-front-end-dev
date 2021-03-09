(function () {
    'use strict';

    let toBuyItems = [
        { name: "cookies", quantity: 1 },
        { name: "bananas", quantity: 5 },
        { name: "cherries", quantity: 20 },
        { name: "strawberries", quantity: 2 }
    ];

    let boughtItems = [];

    angular.module('myApp', [])
        .controller('ToBuyController', ToBuyController);

    ToBuyController.$inject = ['$scope'];
    function ToBuyController ($scope) {
        $scope.toBuyItems = toBuyItems;
        $scope.boughtItems = boughtItems;


    };
})();
