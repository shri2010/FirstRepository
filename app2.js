(function () {
    'use strict';
    angular.module("myapp2", [])
        .controller('myController2', myController2)
        
    myController2.$inject = ['$scope'];
    function myController2($scope) {
        
        $scope.namesList = ["alpha", "beta", "chemistyr", "physics", "Ram", "Shyam", "Rama"];
        console.log("hello");
    }

  
})();