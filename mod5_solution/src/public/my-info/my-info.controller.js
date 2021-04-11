(function () {

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['user', 'isRegistered'];
    function MyInfoController(user, isRegistered) {
        let controller = this;
        controller.user = user;
        controller.isRegistered = isRegistered;
    }

})();
