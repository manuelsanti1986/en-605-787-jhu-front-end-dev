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
            phone: "",
            favoriteDish: ""
        };
        let registered = false;

        service.registerUser = function (user) {
            userInfo = {
                firstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
                phone: user.phone,
                favoriteDish: user.fav_dish
            };
            registered = true;
        };

        service.getUserInfo = function () {
            return userInfo;
        };

        service.isRegistered = function (){
            return registered;
        }
    }



})();
