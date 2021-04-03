(function () {
    'use strict';

    let app = angular.module('NarrowItDownApp', []);

    app.controller('NarrowItDownController', NarrowItDownController);
    app.filter('myCurrency', MyCurrencyFilter);
    app.service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController (MenuSearchService) {
        let bought = this;
        bought.boughtItems = function() {
            let items = MenuSearchService.getBoughItems();
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

    function MenuSearchService(){
        let service = this;

        let toBuyItems = [
            { name: "cookies", quantity: 2 , pricePerItem: 3 },
            { name: "bananas", quantity: 5 , pricePerItem: 1 },
            { name: "cherries", quantity: 20 , pricePerItem: 0.5 },
            { name: "strawberries", quantity: 2 , pricePerItem: 4 }
        ];
        let boughtItems = [];

        service.getMatchedMenuItems = function (searchTerm) {
            let item = toBuyItems.splice(searchTerm, 1).pop();
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
