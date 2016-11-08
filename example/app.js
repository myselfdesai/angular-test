(function () {
  'use strict';

  angular.module('myFirstApp',[])

  .controller('MyFirstController',function($scope) {
    $scope.name = "myname";
    $scope.sayHelo = function() {
      return "hellow amr";
    };
  });

})();
