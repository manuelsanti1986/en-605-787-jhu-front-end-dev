(function () {

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService'];
    function SignUpController(SignUpService) {
        let registration = this;
        registration.isUnknownItem = false;
        registration.completed = false;

        registration.submit = function () {
            let itemShortName = registration.user.fav_dish.toUpperCase();
            SignUpService.checkIfItemExists(itemShortName)
                .then(function (itemExists){
                    if(itemExists.short_name && itemExists.short_name === itemShortName){
                        registration.isUnknownItem = false;
                        SignUpService.registerUser(registration.user);
                        registration.completed = SignUpService.isRegistered();
                    }else {
                        registration.isUnknownItem = true;
                        registration.completed = false;
                        SignUpService.clearUserInfo();
                    }
                })
                .catch(function (error){
                    registration.isUnknownItem = true;
                    registration.completed = false;
                    SignUpService.clearUserInfo();
                });
        };
    }

})();
