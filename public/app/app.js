angular.module('app', []);

angular.module('app').controller('mainCtrl', function ($scope) {

    $scope.jobs = [
        {title: 'Sales Person', description: 'you will fight dragons'},
        {title: 'Accountant', description: 'you will use keyboard' }
    ];

});