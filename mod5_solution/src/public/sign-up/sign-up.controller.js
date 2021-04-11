(function () {

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService'];
    function SignUpController(SignUpService) {
        let registration = this;

        registration.submit = function () {
            console.log(registration.user)
            SignUpService.isUnknownItem(registration.user.fav_dish.toUpperCase());
            SignUpService.registerUser(registration.user);
            registration.completed = SignUpService.isRegistered();
        };
    }

})();
