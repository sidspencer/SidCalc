/**
 * Directive for the screen of the SidCalc calculator.
 */
angular.module('SidCalcApp').directive('calcScreen', function CalcScreenDirective() {
      return {
        restrict: 'E',
        templateUrl: 'components/calcScreen.html',
        scope: {
          text: '='
        }
    };
});