app = angular.module('app', ['ngResource']);

angular.module('app').controller('mainCtrl', function ($scope, $resource, jobs) {
    $scope.jobs = $resource('/api/jobs').query();
    //jobs.save({title: 'test title', description:'test description'});

    $scope.submit = function() {
       var job = {title: $scope.title, description: $scope.description};
        jobs.save(job);
        $scope.jobs.push(job);
    }
});