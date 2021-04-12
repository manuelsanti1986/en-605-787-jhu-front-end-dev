(function () {

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService'];
    function SignUpController(SignUpService) {
        let registration = this;
        registration.isUnknownItem = false;

        registration.submit = function () {
            console.log(registration.user)
            registration.user.fav_dish = registration.user.fav_dish.toUpperCase();
            SignUpService.checkIfItemExists(registration.user.fav_dish)
                .then(function (itemExists){
                    console.log("itemExists")
                    console.log(itemExists)

                    if(itemExists.short_name && itemExists.short_name === registration.user.fav_dish){
                        registration.isUnknownItem = false;
                        console.log("registration.isUnknownItem")
                        console.log(registration.isUnknownItem)
                        SignUpService.registerUser(registration.user);
                        registration.completed = SignUpService.isRegistered();
                    }
                    registration.isUnknownItem = true;
                    registration.completed = false;
                })
                .catch(function (error){
                    registration.completed = false;
                });
        };
    }

})();
