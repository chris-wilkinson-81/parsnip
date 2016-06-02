var TOP_NAV_CUSTOMERS = "customers";
var TOP_NAV_PEOPLE = "people";
var TOP_NAV_INVOICES = "invoices";

parsnipApp.controller('PeopleController', function($scope, $rootScope) {
	$rootScope.topNav = TOP_NAV_PEOPLE;
});

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
	$scope.save = function(customerForm) {
		var customer = new Customer();
		customer.name = customerForm.name;
		customer.businessNumber = customerForm.businessNumber;
		customer.apartmentNumber = customerForm.apartmentNumber;
		customer.streetAddress = customerForm.streetAddress;
		customer.city = customerForm.city;
		customer.province = customerForm.province;
		customer.country = customerForm.country;
		customer.postalCode = customerForm.postalCode;
		customer.phoneNumber = customerForm.phoneNumber;
		customer.faxNumber = customerForm.faxNumber;
		customer.emailAddress = customerForm.emailAddress;
		customer.websiteUrl = customerForm.websiteUrl;
		
		customer.$save(function(customer){
			$location.path("/customer-details/" + customer.id).search("customerCreate",true);
		});
	}
	
});

parsnipApp.controller('InvoicesController', function($scope, $rootScope) {
	$rootScope.topNav = TOP_NAV_INVOICES;
});

