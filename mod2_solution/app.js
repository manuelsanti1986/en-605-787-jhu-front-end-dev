(function () {
    'use strict';

    let app = angular.module('myApp', []);

    app.controller('ToBuyController', ToBuyController);
    app.controller('AlreadyBoughtController', AlreadyBoughtController);
    app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService) {
        let toBuy = this;
        toBuy.toBuyItems = function() {
            let items = ShoppingListCheckOffService.getToBuyItems();
            toBuy.itemsToBuyMessage = (items.length === 0)? "Everything is bought!" : "";
            return items;
        }

        toBuy.buyItem = function (index){
            ShoppingListCheckOffService.buyItem(index);
        };
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController (ShoppingListCheckOffService) {
        let bought = this;
        bought.boughtItems = function() {
            let items = ShoppingListCheckOffService.getBoughItems();
            bought.itemsBoughtMessage = (items.length === 0)? "Nothing bought yet." : "";
            return items;
        };
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
        }

        service.getToBuyItems = function() {
            return toBuyItems;
        }

        service.getBoughItems = function() {
            return boughtItems;
        }

    }

})();
