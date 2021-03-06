(() => {
    'use strict';
    angular.module('myApp', [])
        .controller('ModuleController', ['$scope', '$injector', ModuleController]);

    function ModuleController ($scope, $injector) {
        $scope.name = "";
        $scope.totalValue = 0;
        $scope.displayNumeric = function () {
            let totalNameValue = calculateNumericForString($scope.name);
            $scope.totalValue = totalNameValue;
        };
        console.log($injector.annotate(ModuleController));
    };

    function calculateNumericForString (string) {
        let totalStringValue = 0;
        let i = string.length;
        while(i--){
            totalStringValue += string.charCodeAt(i);
        };
        return totalStringValue;
    };

})();
