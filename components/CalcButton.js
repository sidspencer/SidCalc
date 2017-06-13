angular.module('SidCalcApp').directive('calcButton', function CalcButtonDirective() {
      return {
        restrict: 'E',
        templateUrl: 'components/calc_button.html',
        scope: {
          type: '@',
          text: '@',
          click: '&'
        },
        link: function CalcButtonController($scope) {
            $scope.doClick = function doClick(item) {
              $scope.click()($scope.text);
            }
          }
        };
  });