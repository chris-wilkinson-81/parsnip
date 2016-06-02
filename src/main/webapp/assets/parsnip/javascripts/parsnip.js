console.log("Initializing parsnipApp angular js app ...");

var parsnipApp = angular.module('parsnip-app', ['ui.bootstrap','ui.sortable','ngRoute','ngResource','parsnipServices']).run(['$rootScope', function($rootScope) {
	//this is where you can define global functions in the rootScope
	//e.g.
	//$rootScope.foo = function(){
	//	$rootScope.enableSomeUIComponent = true;
	//}
	
}]);

parsnipApp.config(['$routeProvider', '$locationProvider','$httpProvider',
    function($routeProvider, $httpProvider) {
        $routeProvider.
            when('/people', {
                templateUrl: "/assets/parsnip/templates/people.html",
                controller: 'PeopleController'
            }).
            when('/invoices', {
                templateUrl: "/assets/parsnip/templates/invoices.html",
                controller: 'InvoicesController'
            }).
            when('/customers', {
                templateUrl: "/assets/parsnip/templates/customers.html",
                controller: 'CustomersController'
            }).
            when('/customer-create', {
                templateUrl: "/assets/parsnip/templates/customer-form.html",
                controller: 'CreateCustomerController'
            }).
            when('/customer-details/:customerId', {
                templateUrl: "/assets/parsnip/templates/customer-details.html",
                controller: 'CustomerDetailsController'
            }).
            otherwise({
                redirectTo: '/people'
            });
    }
]).run( function($q, $rootScope, $location, $route) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        console.log("Starting route change");
        
        delete $rootScope.successMsg;
    })
});
   