(() => {
    'use strict';
    angular.module('module01App', [])
        .controller('ModuleController', ($scope) => {
            $scope.name = "";
            $scope.totalValue = 0;
            $scope.displayNumeric = () => {
                let totalNameValue = calculateNumericForString($scope.name);
                $scope.totalValue = totalNameValue;
            };

            let calculateNumericForString = (string) => {
                let totalStringValue = 0;
                let i = string.length;
                while(i--){
                    totalStringValue += string.charCodeAt(i);
                };
                return totalStringValue;
            };
        });
})();
