var TOP_NAV_CUSTOMERS = "customers";
var TOP_NAV_PEOPLE = "people";
var TOP_NAV_INVOICES = "invoices";
var PERSON_ROLES = [{"id":"ADMIN","label":"Administrator"},{"id":"REGULAR","label":"Regular User"}];

parsnipApp.controller('PeopleController', function($scope, $rootScope, Person) {
	$rootScope.topNav = TOP_NAV_PEOPLE;
	$scope.people = Person.query();
});

parsnipApp.controller('PersonDetailsController', function($scope, $rootScope, $routeParams, Person) {
	$rootScope.topNav = TOP_NAV_PEOPLE;
	$scope.person = Person.get({personId:$routeParams.personId});
});

parsnipApp.controller('CreatePersonController', function($scope, $rootScope, $location, Person) {
	$rootScope.topNav = TOP_NAV_PEOPLE;
	
	$scope.isCreate = true;
	$scope.roles = PERSON_ROLES;
	
	$scope.save = function(personForm) {
		var person = new Person();
		person.firstName = personForm.firstName;
		person.lastName = personForm.lastName;		
		person.emailAddress = personForm.emailAddress;
		person.role = personForm.role.id;
		person.password = personForm.password;
		
		person.$save(function(person){
			$location.path("/person-details/" + person.id).search("personCreate",true);
		});
	}
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

