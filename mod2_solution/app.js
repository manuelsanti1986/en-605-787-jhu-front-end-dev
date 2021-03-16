(function () {
    'use strict';

    let app = angular.module('myApp', []);

    app.controller('ToBuyController', ToBuyController);
    app.controller('AlreadyBoughtController', AlreadyBoughtController);
    app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService) {
        let toBuy = this;
        toBuy.itemsToBuyMessage = "";
        toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function (index){
            ShoppingListCheckOffService.buyItem(index);
            if(toBuy.toBuyItems.length === 0){
                toBuy.itemsToBuyMessage = "Everything is bought!";
            }
        };
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController (ShoppingListCheckOffService) {
        let bought = this;
        bought.boughtItems = ShoppingListCheckOffService.getBoughItems();
        bought.itemsBoughtMessage = (bought.boughtItems.length === 0)? "Nothing bought yet." : "";
    };

    function ShoppingListCheckOffService(){
        let service = this;

        let toBuyItems = [
            { name: "cookies", quantity: 2 },
            { name: "bananas", quantity: 5 },
            { name: "cherries", quantity: 20 },
            { name: "strawberries", quantity: 2 }
        ];
        let boughtItems = [];

        service.buyItem = function (index) {
            let item = toBuyItems.splice(index, 1);
            boughtItems = boughtItems.concat(item);
            console.log(boughtItems);
        }

        service.getToBuyItems = function() {
            return toBuyItems;
        }

        service.getBoughItems = function() {
            return boughtItems;
        }

    }

})();
