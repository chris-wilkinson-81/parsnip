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
            when('/person-create', {
                templateUrl: "/assets/parsnip/templates/person-form.html",
                controller: 'CreatePersonController'
            }).
            when('/person-details/:personId', {
                templateUrl: "/assets/parsnip/templates/person-details.html",
                controller: 'PersonDetailsController'
            }).
            when('/customers', {
                templateUrl: "/assets/parsnip/templates/customers.html",
                controller: 'CustomersController'
            }).
            when('/customer-create', {
                templateUrl: "/assets/parsnip/templates/customer-form.html",
                controller: 'CreateCustomerController'
            }).
            when('/customer-edit/:customerId', {
                templateUrl: "/assets/parsnip/templates/customer-form.html",
                controller: 'EditCustomerController'
            }).
            when('/customer-details/:customerId', {
                templateUrl: "/assets/parsnip/templates/customer-details.html",
                controller: 'CustomerDetailsController'
            }).
            when('/vendors', {
                templateUrl: "/assets/parsnip/templates/vendors.html",
                controller: 'VendorsController'
            }).
            when('/vendor-create', {
                templateUrl: "/assets/parsnip/templates/vendor-form.html",
                controller: 'CreateVendorController'
            }).
            when('/vendor-edit/:vendorId', {
                templateUrl: "/assets/parsnip/templates/vendor-form.html",
                controller: 'EditVendorController'
            }).
            when('/vendor-details/:vendorId', {
                templateUrl: "/assets/parsnip/templates/vendor-details.html",
                controller: 'VendorDetailsController'
            }).
            when('/carriers', {
                templateUrl: "/assets/parsnip/templates/carriers.html",
                controller: 'CarriersController'
            }).
            when('/carrier-create', {
                templateUrl: "/assets/parsnip/templates/carrier-form.html",
                controller: 'CreateCarrierController'
            }).
            when('/carrier-edit/:carrierId', {
                templateUrl: "/assets/parsnip/templates/carrier-form.html",
                controller: 'EditCarrierController'
            }).
            when('/carrier-details/:carrierId', {
                templateUrl: "/assets/parsnip/templates/carrier-details.html",
                controller: 'CarrierDetailsController'
            }).
            when('/invoices', {
                templateUrl: "/assets/parsnip/templates/invoices.html",
                controller: 'InvoicesController'
            }).
            when('/invoice-create/customer/:customerId', {
                templateUrl: "/assets/parsnip/templates/invoice-form.html",
                controller: 'CreateInvoiceController'
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
   