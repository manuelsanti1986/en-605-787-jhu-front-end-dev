(function () {
    "use strict";

    angular.module('common')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = ['$http', '$q', 'ApiPath'];
    function SignUpService($http, $q, ApiPath) {
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


        service.checkIfItemExists = function (favoriteDish){
            let deferred = $q.defer();

            $http({
                method: 'GET',
                url: (ApiPath + `/menu_items/${favoriteDish}.json`)
            })
                .then(function (response) {
                    deferred.resolve(response.data);
                })
                .catch(function (err) {
                    deferred.reject(`Error: Unable to get items. ${err}`);
                });
            return deferred.promise;
        }

        service.clearUserInfo = function() {
            userInfo = {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                favoriteDish: ""
            };
            registered = false;
        }
    }



})();
