function KursCtrl($scope, $routeParams, Course) {
    $scope.id = 0;

    if ($scope.courses === undefined)
    $scope.courses = Course.query();

    $scope.courses.forEach(function (current) {
        if (current.id == $routeParams.courseId) {
            $scope.current = current;
        }
    });


    $scope.addCourse = function () {
        $scope.courses.push({"name": $scope.search, "id": "" + (++$scope.id)});
        $scope.search = "";
    };

    $scope.removeCourse = function(course){
        $scope.courses = $scope.courses.splice($scope.courses.indexOf(course),1);
    };

    $scope.searchCourses = function(term){

    }

}


function AboutCtrl($scope) {

}