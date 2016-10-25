parsnipApp.controller('VendorsController', function($scope, $rootScope, Vendor) {
	$rootScope.topNav = TOP_NAV_VENDORS;
    $scope.vendors = Vendor.query();
});

parsnipApp.controller('VendorDetailsController', function($scope, $rootScope, $routeParams, Vendor) {
	$rootScope.topNav = TOP_NAV_VENDORS;
	$scope.vendor = Vendor.get({vendorId:$routeParams.vendorId});
});

parsnipApp.controller('CreateVendorController', function($scope, $rootScope, $location, Vendor) {
	$rootScope.topNav = TOP_NAV_VENDORS;
	
	$scope.isCreate = true;
	$scope.vendor = new Vendor();
	$scope.save = function(vendor) {
		vendor.$save(function(vendor){
			$location.path("/vendor-details/" + vendor.id).search("vendorCreate",true);
		});
	}
	
});

parsnipApp.controller('EditVendorController', function($scope, $rootScope, $routeParams, $location, Vendor) {
	$rootScope.topNav = TOP_NAV_VENDORS;
	
	$scope.vendor = Vendor.get({vendorId:$routeParams.vendorId});
	$scope.save = function(vendor) {
		vendor.$save(function(vendor){
			$location.path("/vendor-details/" + vendor.id).search("vendorEdit",true);
		});
	}
});
