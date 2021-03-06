(function () {
    'use strict';
    angular.module('myApp', [])
        .controller('LunchCheckController', ['$scope', '$injector', LunchCheckController]);

    function LunchCheckController ($scope, $injector) {
        $scope.lunchList = "";
        $scope.message = "";

        $scope.checkCSV = function (){
            $scope.message = "";
            let csv = $scope.lunchList;

            if(csv.length > 0) {
                console.log(csv);
                let list = convertCSVToArray(csv);
                console.log(list);
                $scope.message = (list.length < 4) ? "Enjoy!" : "Too much!";
            }else {
                $scope.message = "Please enter data first";
            }
        };

    };

    function convertCSVToArray(csv){
        let list = csv.replace(/\s/g, '');
        list = list.split(",");
        list = list.filter(item => item);
        return list;
    }

})();
