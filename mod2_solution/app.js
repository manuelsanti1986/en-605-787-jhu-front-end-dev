(function () {
    'use strict';

    let app = angular.module('myApp', []);

    app.controller('ToBuyController', ToBuyController);
    app.controller('AlreadyBoughtController', AlreadyBoughtController);
    app.filter('myCurrency', MyCurrencyFilter);
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

    function MyCurrencyFilter(){
        return function(input) {
            input = ("$$" + input) || "";
            return input;
        };
    }

    function ShoppingListCheckOffService(){
        let service = this;

        let toBuyItems = [
            { name: "cookies", quantity: 2 , pricePerItem: 3 },
            { name: "bananas", quantity: 5 , pricePerItem: 1 },
            { name: "cherries", quantity: 20 , pricePerItem: 0.5 },
            { name: "strawberries", quantity: 2 , pricePerItem: 4 }
        ];
        let boughtItems = [];

        service.buyItem = function (index) {
            let item = toBuyItems.splice(index, 1).pop();
            let total_price = item.quantity * item.pricePerItem;
            item = {...item, total_price};
            boughtItems.push(item);
        }

        service.getToBuyItems = function() {
            return toBuyItems;
        }

        service.getBoughItems = function() {
            return boughtItems;
        }

    }

})();
