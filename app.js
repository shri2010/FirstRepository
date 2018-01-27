(function () {
    'use strict';
    angular.module("myapp", [])
        .controller('myController', myController)
    .filter('first', FirstFilterFactory);
    myController.$inject = ['$scope', 'firstFilter'];
    function myController($scope, firstFilter) {
        var msg = "hello";
        $scope.namesList = ["alpha", "beta", "chemistyr", "physics", "Ram", "Shyam", "Rama"];

        $scope.testFilter = function ()
        {
           return firstFilter(msg);
        }
    }

    function FirstFilterFactory() {

        return function (input) {

            return input + "you";

        }

    }
})();