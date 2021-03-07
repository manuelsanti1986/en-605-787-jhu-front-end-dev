(function () {
    'use strict';
    angular.module('myApp', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope, $injector) {
        $scope.lunchList = "";
        $scope.message = "";
        $scope.classTextBox = "";


        $scope.checkCSV = function (){
            $scope.message = "";
            let csv = $scope.lunchList;

            if(csv.length > 0) {
                let list = convertCSVToArray(csv);
                $scope.message = (list.length < 4) ? "Enjoy!" : "Too much!";
                $scope.classTextBox = "alert alert-success";
            }else {
                $scope.message = "Please enter data first";
                $scope.classTextBox = "alert alert-danger";
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
