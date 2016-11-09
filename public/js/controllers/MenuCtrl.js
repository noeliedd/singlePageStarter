angular.module('MenuCtrl', []).controller('MenuController', function($scope) {
  $scope.myInterval = 4000;
  $scope.desc = ['Stewed Duck Noodle','Sen Lek ','Kao Soi (€)'];
  $scope.slides = [
    {
      image: 'img/duck.png'
    },
    {
      image: 'img/senLek.png'
    },
    {
      image: 'img/kaoSoi.png'
    }
  ];
});