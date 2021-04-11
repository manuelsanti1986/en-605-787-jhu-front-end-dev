(function () {
    "use strict";

    angular.module('common')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = [];
    function SignUpService() {
        let service = this;
        let userInfo = {
          firstName: "",
          lastName: "",
          email: "",
          phone: ""
        };
        let registered = false;

        service.registerUser = function (user) {
            userInfo = {
                firstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
                phone: user.phone
            };
            registered = true;
            console.log("service.userInfo")
            console.log(userInfo)
            console.log("registered")
            console.log(registered)
        };

        service.getUserInfo = function () {
            return userInfo;
        };

        service.isRegistered = function (){
            console.log("GETTING isRegistered()")
            console.log(registered)
            return registered;
        }
    }



})();
