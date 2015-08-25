angular.module('app', ['ngResource']);

angular.module('app').controller('mainCtrl', function ($scope, $resource) {
    $scope.jobs = $resource('/api/jobs').query();
});