(function (){
  'use strict';
  angular.module('DiApp', [] )
  .controller('DiController',DiController);

  function DiController ($scope,$filter){
  //  $scope.name = "amar";

    $scope.upper = function () {
      var Upcase = $filter('uppercase');
      $scope.name = Upcase($scope.name);
    }
  }
})();
