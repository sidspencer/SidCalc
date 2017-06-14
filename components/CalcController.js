/**
 * Main Controller for the SidCalc application.
 */
angular.module('SidCalcApp').controller('calcController', function CalcController($scope) {
  var _runningTotal = 0;
  var _finalTotal = 0;

  $scope.screenText = _finalTotal;
  $scope.currentButton = _finalTotal;
  $scope.previousButton = _finalTotal;
  $scope.nextOperator = undefined;


  /**
   * Click handler for number-type buttons.
   */
  $scope.punchInNumber = function punchInNumber(num) {
    if (_finalTotal) {
      _runningTotal = 0;
    }

    $scope.screenText = num;
    $scope.previousButton = $scope.currentButton;
    $scope.currentButton = num;

    if ($scope.nextOperator) {
      $scope.nextOperator();
    }
  };


  /**
   * Perform the action of subtraction
   */
  function minus() {
    _runningTotal += Number.parseInt($scope.previousButton) - Number.parseInt($scope.currentButton);
  }

  /**
   * Perform the action of the minus button.
   * Enqueue minus as the next operator to perform.
   */
  $scope.subtract = function enqueueMinus() {
    $scope.nextOperator = minus;
  }

  /**
   * Perform the action of addition.
   */
  function plus() {
    _runningTotal += Number.parseInt($scope.currentButton) + Number.parseInt($scope.previousButton);
  }


  /**
   * Perform the action of the plus button.
   * Enqueue plus as the next operator to perform.
   */
  $scope.add = function enqueuePlus() {
    $scope.nextOperator = plus;
  };

  /**
   * Perform the action of the equals button.
   */
  $scope.equals = function equals() {
    if ($scope.currentButton && _finalTotal != 0) {
      _runningTotal += Number.parseInt($scope.currentButton);
    }

    _finalTotal = _runningTotal;
    $scope.screenText = _finalTotal;
  };
 

  /**
   * Perform the action for all the non-implemented operators.
   */
  $scope.notImplemented = function notImplemented() {
    $scope.screenText = "Not Implemented"
  }


  /**
   * Handler for the "C"/clear button.
   */
  $scope.clear = function clearScreen() {
    _runningTotal = 0;
    _finalTotal = 0;
    $scope.previousButton = 0;
    $scope.currentButton = 0;
    $scope.nextOperator = undefined;
    $scope.screenText = 0;
  }

  // Create the buttons array, each having a type, text, and a click-action.
  $scope.buttons = [
   {
      type: 'specialOperator',
      text: 'C',
      click: $scope.clear,
    }, 
    {
      type: 'specialOperator',
      text: '+/-',
      click: $scope.notImplemented,
    },
        {
      type: 'specialOperator',
      text: '%',
      click: $scope.notImplemented,
    },
        {
      type: 'operator',
      text: '/',
      click: $scope.notImplemented,
    },
    {
      type: 'number',
      text: 7,
      click: $scope.punchInNumber
    },
    {
      type: 'number',
      text: 8,
      click: $scope.punchInNumber
    },
    {
      type: 'number',
      text: 9,
      click: $scope.punchInNumber
    },
        {
      type: 'operator',
      text: 'X',
      click: $scope.notImplemented,
    },
    {
      type: 'number',
      text: 4,
      click: $scope.punchInNumber
    },
    {
      type: 'number',
      text: 5,
      click: $scope.punchInNumber
    },
    {
      type: 'number',
      text: 6,
      click: $scope.punchInNumber
    },
        {
      type: 'operator',
      text: '-',
      click: $scope.subtract,
    },
    {
      type: 'number',
      text: 1,
      click: $scope.punchInNumber
    },
    {
      type: 'number',
      text: 2,
      click: $scope.punchInNumber
    },
    {
      type: 'number',
      text: 3,
      click: $scope.punchInNumber
    },
    {
      type: 'operator',
      text: '+',
      click: $scope.add,
    },
    {
      type: 'number doubleWide',
      text: 0,
      click: $scope.punchInNumber
    },
    {
      type: 'operator',
      text: '.',
      click: $scope.notImplemented,
    },
    {
      type: 'operator',
      text: '=',
      click: $scope.equals,
    },
  ];
});