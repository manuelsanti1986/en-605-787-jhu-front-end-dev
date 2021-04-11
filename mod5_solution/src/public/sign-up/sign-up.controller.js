(function () {

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService'];
    function SignUpController(SignUpService) {
        let registration = this;
        console.log("SignUpController")

        registration.submit = function () {
            console.log("registration user ")
            console.log(registration);
            SignUpService.registerUser(registration.user);
            registration.completed = true;
        };
    }

})();
