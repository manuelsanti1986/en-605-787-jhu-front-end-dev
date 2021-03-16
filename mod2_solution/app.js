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
    app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService) {
        let toBuy = this;
        toBuy.itemsToBuyMessage = "";
        toBuy.toBuyItems = toBuyItems;

        toBuy.buyItem = function (){
            if(toBuy.toBuyItems.length === 0){
                toBuy.itemsToBuyMessage = "Everything is bought!";
            }
        };
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController (ShoppingListCheckOffService) {
        let bought = this;
        bought.itemsBoughtMessage = "Nothing bought yet.";
        bought.boughtItems = boughtItems;

        bought.alreadyBoughtItem = function (){
            if(bought.toBuyItems.length === 0){
                bought.itemsToBuyMessage = "Everything is bought!";
            }
        };

    };

    function ShoppingListCheckOffService(){
        let service = this;

    }

})();
