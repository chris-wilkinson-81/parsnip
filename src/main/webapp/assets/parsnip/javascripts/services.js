var adminAppServices = angular.module('adminAppServices', ['ngResource']);

adminAppServices.factory('Path', ['$resource',
    function($resource) {
    	return $resource('/addon/passport/api/paths/:pathId', {}, {
    		query: {method:'GET', params:{}, isArray:true},
    		saveList: {method:'PUT', params:{}, isArray:true},
    		getCairns: {method:'PUT', params:{}, isArray:true},
        });
	}
]);

adminAppServices.factory('Cairn', ['$resource',
    function($resource) {
  		return $resource('/addon/passport/api/cairns/:cairnId', {}, {
  			query: {method:'GET', params:{}, isArray:true},
  			getForPath: {
  		        method:'GET',
  		        params: {},
  		        url:'/addon/passport/api/paths/:pathId/cairns',
  		        isArray: true
  		    },
  			saveForPath: {
  		        method:'PUT',
  		        params: {},
  		        url:'/addon/passport/api/paths/:pathId/cairns',
  		        isArray: true
  		    }
        });
  	}
]);