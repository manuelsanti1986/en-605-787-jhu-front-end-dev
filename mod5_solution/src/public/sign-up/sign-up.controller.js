(function () {

    angular.module('public')
        .controller('SignUpController', SignUpController);

    function SignUpController() {
        let registration = this;
        console.log("SignUpController")
        registration.submit = function () {
            registration.completed = true;
        };
    }

})();
