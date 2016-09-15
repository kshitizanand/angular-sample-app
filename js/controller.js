console.log("controller.js");
spicyApp.controller('spicyController', ['$scope', function($scope){
    $scope.spice = "very";

    $scope.chillySpicy = function() {
        $scope.spice = "Chilly";
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = "Jalapeno";
    };
}]);