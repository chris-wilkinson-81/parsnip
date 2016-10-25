var TOP_NAV_CUSTOMERS = "customers";
var TOP_NAV_PEOPLE = "people";
var TOP_NAV_INVOICES = "invoices";
var TOP_NAV_VENDORS = "vendors";
var TOP_NAV_CARRIERS = "carriers";

var PERSON_ROLES = [{"id":"ADMIN","label":"Administrator"},{"id":"REGULAR","label":"Regular User"}];

parsnipApp.controller('CustomersController', function($scope, $rootScope, Customer) {
	$rootScope.topNav = TOP_NAV_CUSTOMERS;
    $scope.customers = Customer.query();
});

parsnipApp.controller('CustomerDetailsController', function($scope, $rootScope, $routeParams, Customer) {
	$rootScope.topNav = TOP_NAV_CUSTOMERS;
	$scope.customer = Customer.get({customerId:$routeParams.customerId});
});

parsnipApp.controller('CreateCustomerController', function($scope, $rootScope, $location, Customer) {
	$rootScope.topNav = TOP_NAV_CUSTOMERS;
	
	$scope.isCreate = true;
	$scope.customer = new Customer();
	$scope.save = function(customer) {
		customer.$save(function(customer){
			$location.path("/customer-details/" + customer.id).search("customerCreate",true);
		});
	}
	
});

parsnipApp.controller('EditCustomerController', function($scope, $rootScope, $routeParams, $location, Customer) {
	$rootScope.topNav = TOP_NAV_CUSTOMERS;
	
	$scope.customer = Customer.get({customerId:$routeParams.customerId});

	$scope.save = function(customer) {
		customer.$save(function(customer){
			$location.path("/customer-details/" + customer.id).search("customerEdit",true);
		});
	}
});
