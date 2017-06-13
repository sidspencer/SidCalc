// Define the `PhoneListController` controller on the `phonecatApp` module
angular.module('SidCalcApp').controller('calcController', function CalcController($scope) {
  var _runningTotal = 0;
  var _finalTotal = 0;

  $scope.screenText = _finalTotal;
  $scope.currentButton = _finalTotal;
  $scope.previousButton = _finalTotal;
  $scope.nextOperator = undefined;

  $scope.punchInNumber = function punchInNumber(num) {
    if (_finalTotal) {
      _runningTotal = 0;
    }

    $scope.screenText = num;
    $scope.previousButton = $scope.currentButton;
    $scope.currentButton = num;

    if ($scope.nextOperator) {
      $scope.nextOperator();
      $scope.nextOperator = undefined;
    }
  };

  function plus() {
    _runningTotal += Number.parseInt($scope.currentButton) + Number.parseInt($scope.previousButton);
  }

  $scope.plus = function enqueuePlus() {
    $scope.nextOperator = plus;
  }

  $scope.equals = function equals() {
    if ($scope.currentButton) {
      _runningTotal += Number.parseInt($scope.currentButton);
    }

    _finalTotal = _runningTotal;
    $scope.screenText = _finalTotal;
  }
 
  // Create the buttons array, first with the operator buttons.
  $scope.buttons = [
   {
      type: 'operator',
      text: '+',
      click: $scope.plus,
    }, 
    {
      type: 'operator',
      text: '=',
      click: $scope.equals,
    }
  ];

  // Add the number buttons.
  for (var i=0; i < 10; i++) {
    $scope.buttons.push({
      type: 'number',
      text: i,
      click: $scope.punchInNumber
    });
  }
});