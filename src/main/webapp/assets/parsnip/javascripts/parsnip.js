console.log("Initializing admin-console-app angular js app ...");

var pasrnipApp = angular.module('admin-console-app', ['ui.bootstrap','ui.sortable','ngRoute','ngResource','adminAppServices']).run(['$rootScope', function($rootScope) {
	//this is where you can define global functions in the rootScope
	//e.g.
	//$rootScope.foo = function(){
	//	$rootScope.enableSomeUIComponent = true;
	//}
	
}]);

pasrnipApp.config(['$routeProvider', '$locationProvider','$httpProvider',
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
   