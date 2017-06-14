/**
 * Directive for creating calculator buttons for SidCalc
 */
angular.module('SidCalcApp').directive('calcButton', function CalcButtonDirective() {
      return {
        restrict: 'E',
        templateUrl: 'components/CalcButton.html',
        scope: {
          type: '@',
          text: '@',
          click: '&'
        },
        link: function CalcButtonController($scope) {
            // Wrap the click function.
            $scope.doClick = function doClick(item) {
              $scope.click()($scope.text);
            }
          }
        };
  });