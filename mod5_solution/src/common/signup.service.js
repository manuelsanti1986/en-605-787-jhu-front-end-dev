(function () {
    "use strict";

    angular.module('common')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = ['$http', 'ApiPath'];
    function SignUpService($http, ApiPath) {
        let service = this;
        let userInfo = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            favoriteDish: ""
        };
        let registered = false;
        let isUnknownItem = false;

        service.registerUser = function (user) {
            userInfo = {
                firstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
                phone: user.phone,
                favoriteDish: user.fav_dish.toUpperCase()
            };
            userInfo.imageUrl = !userInfo.favoriteDish ?
                undefined :
                `${ApiPath}/images/${userInfo.favoriteDish}.jpg`;
            registered = true;
        };

        service.getUserInfo = function () {
            return userInfo;
        };

        service.isRegistered = function (){
            return registered;
        }

        service.isUnknownItem = function (favoriteDish){
            let response = $http({
                method: 'GET',
                url: (ApiPath + `/menu_items/${favoriteDish}.json`)
            }).then(function (response) {
                console.log("response");
                console.log(response);
                return response.data;
            })
                .catch(function (err) {
                    return `Error: Unable to get items. ${err}`
                });
            return response;
        }
    }



})();
