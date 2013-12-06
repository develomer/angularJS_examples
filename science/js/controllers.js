var scientistcatApp = angular.module('scientistcatApp', []);

scientistcatApp.controller('ScientistListCtrl', function ($scope) {
    $scope.scientists = [
      {
          'name': 'André-Marie Ampère',
          'life': '1775–1836',
          'nationality': 'French'
      },
      {
          'name': 'William Thomson',
          'life': '1824–1907',
          'nationality': 'British (Scottish)'
      },
      {
          'name': 'Blaise Pascal',
          'life': '1623–1662',
          'nationality': 'French'
      },
      {
          'name': 'Isaac Newton',
          'life': '1643–1727',
          'nationality': 'British (Enlish)'
      }
    ];
});