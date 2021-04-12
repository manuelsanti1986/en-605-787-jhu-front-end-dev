(function () {

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['userInfo', 'isRegistered'];
    function MyInfoController(userInfo, isRegistered) {
        let controller = this;
        controller.userInfo = userInfo;
        controller.isRegistered = isRegistered;
    }

})();
