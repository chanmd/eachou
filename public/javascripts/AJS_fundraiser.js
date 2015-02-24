function fundraiserController($scope) {
$scope.FundName = '';

$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 

$scope.editUser = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.FundName = '';
    } else {
    $scope.edit = false;
  }
};

$scope.$watch('FundName',function() {$scope.test();});

$scope.test = function() {
  $scope.incomplete = false;
  if (!$scope.FundName.length) {
       $scope.incomplete = true;
  }
};

}