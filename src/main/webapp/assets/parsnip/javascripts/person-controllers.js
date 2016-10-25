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