(function () {
    'use strict';
    angular.module("myapp", [])
        .controller('myController', myController)
    .filter('first', FirstFilterFactory);
    myController.$inject = ['$scope', 'firstFilter'];
    function myController($scope,firstFilter)
    {
        var msg = "hello";

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