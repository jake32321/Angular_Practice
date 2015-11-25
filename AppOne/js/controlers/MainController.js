//Purpose is to controll the app's data.
app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Check This Out'; //Properties are attached to the scope ($scope).
  $scope.promo = 'New books on sale every Sunday!';
  $scope.product = { //Different properties of a scope can have a list of attributes.
    name: 'The Book of Trees',
    price: 19
  };
}]);
