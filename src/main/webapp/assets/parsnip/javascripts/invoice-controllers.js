
parsnipApp.controller('InvoicesController', function($scope, $rootScope, Invoice) {
	$rootScope.topNav = TOP_NAV_INVOICES;
	$scope.invoices = Invoice.query();
});



parsnipApp.controller('CreateInvoiceController', function($scope, $rootScope, $routeParams, $location, Invoice, Customer) {
	$rootScope.topNav = TOP_NAV_INVOICES;
	
	$scope.isCreate = true;
	$scope.invoice = new Invoice();
	$scope.invoice.customer = Customer.get({customerId:$routeParams.customerId});
	$scope.save = function(invoice) {
		invoice.$save(function(invoice){
			$location.path("/invoice-details/" + invoice.id).search("invoiceCreate",true);
		});
	}
});