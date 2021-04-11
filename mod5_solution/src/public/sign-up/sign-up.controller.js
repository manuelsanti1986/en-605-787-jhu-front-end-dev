(function () {

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService'];
    function SignUpController(SignUpService) {
        let registration = this;

        registration.submit = function () {
            SignUpService.registerUser(registration.user);
            registration.completed = true;
        };
    }

})();
