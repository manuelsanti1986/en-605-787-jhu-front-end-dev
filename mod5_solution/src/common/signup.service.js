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

        service.registerUser = function (user) {
            userInfo = {
                firstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
                phone: user.phone
            };
            console.log("service.userInfo")
            console.log(userInfo)
        };

        service.getuserInfo = function () {
            return userInfo;
        };
    }



})();
