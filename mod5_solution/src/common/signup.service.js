(function () {
    "use strict";

    angular.module('common')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = [];
    function SignUpService() {
        let service = this;
        let userInfo = {
          first_name: "",
          last_name: "",
          email: "",
          phone: ""
        };

        service.registerUser = function (user) {
            service.userInfo = user;
            console.log("service.userInfo")
            console.log(service.userInfo)
        };

        service.getuserInfo = function () {
            return service.userInfo;
        };
    }



})();
