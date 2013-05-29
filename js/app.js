angular.module('kurs', ['kursServices']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl:'partials/guide.html', controller: KursCtrl}).
            when('/about', {templateUrl:'partials/about.html', controller: AboutCtrl}).
            when('/:courseId', {templateUrl: 'partials/course-page.html',   controller: KursCtrl}).
            otherwise({redirectTo: '/'});
    }]);