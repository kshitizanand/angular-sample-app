console.log("controller.js");
spicyApp.controller('SpicyController', ['$scope', function($scope){
    $scope.spice = "very";
    $scope.customSpice = "wasabi";
    
    $scope.spicy = function(spice) {
        $scope.spice = spice;
    };

}]);