
angular.module('kursServices', ['ngResource']).
    factory('Course', function($resource){
        return $resource('dummy.json', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    });