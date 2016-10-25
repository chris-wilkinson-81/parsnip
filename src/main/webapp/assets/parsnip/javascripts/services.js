var parsnipServices = angular.module('parsnipServices', ['ngResource']);

parsnipServices.factory('Person', ['$resource',
    function($resource) {
    	return $resource('/api/people/:personId', {}, {
    		query: {method:'GET', params:{}, isArray:true},
    		//saveList: {method:'PUT', params:{}, isArray:true},
    		//getCairns: {method:'PUT', params:{}, isArray:true},
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

parsnipServices.factory('Vendor', ['$resource',
    function($resource) {
    	return $resource('/api/vendors/:vendorId', {}, {
    	    query: {method:'GET', params:{}, isArray:true},
        });
    }
]);

parsnipServices.factory('Carrier', ['$resource',
    function($resource) {
		return $resource('/api/carriers/:carrierId', {}, {
			query: {method:'GET', params:{}, isArray:true},
        });
    }
]);

parsnipServices.factory('Invoice', ['$resource',
    function($resource) {
		return $resource('/api/invoices/:invoiceId', {}, {
			query: {method:'GET', params:{}, isArray:true},
        });
    }
]);