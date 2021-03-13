(function () {
    'use strict';

    let app = angular.module('myApp', []);

    let toBuyItems = [
        { name: "cookies", quantity: 1 },
        { name: "bananas", quantity: 5 },
        { name: "cherries", quantity: 20 },
        { name: "strawberries", quantity: 2 }
    ];

    let boughtItems = [];

    app.controller('ToBuyController', ToBuyController);
    app.controller('AlreadyBoughtController', AlreadyBoughtController);

    ToBuyController.$inject = ['$scope'];
    function ToBuyController ($scope) {
        $scope.itemsToBuyMessage = "";
        $scope.toBuyItems = toBuyItems;

        $scope.buyItem = function (){
            if($scope.toBuyItems.length === 0){
                $scope.itemsToBuyMessage = "Everything is bought!";
            }
        };

    };

    AlreadyBoughtController.$inject = ['$scope'];
    function AlreadyBoughtController ($scope) {
        $scope.itemsBoughtMessage = "Nothing bought yet.";
        $scope.boughtItems = boughtItems;

        $scope.alreadyBoughtItem = function (){
            if($scope.toBuyItems.length === 0){
                $scope.itemsToBuyMessage = "Everything is bought!";
            }
        };

    };

})();
