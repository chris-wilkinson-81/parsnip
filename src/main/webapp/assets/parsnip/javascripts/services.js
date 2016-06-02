var parsnipServices = angular.module('parsnipServices', ['ngResource']);

parsnipServices.factory('Person', ['$resource',
    function($resource) {
    	return $resource('/api/people', {}, {
    		query: {method:'GET', params:{}, isArray:true},
    		saveList: {method:'PUT', params:{}, isArray:true},
    		getCairns: {method:'PUT', params:{}, isArray:true},
        });
	}
]);

parsnipServices.factory('Customer', ['$resource',
    function($resource) {
   	    return $resource('/api/customers/:customerId', {}, {
   	    	query: {method:'GET', params:{}, isArray:true},
        });
   	}
]);