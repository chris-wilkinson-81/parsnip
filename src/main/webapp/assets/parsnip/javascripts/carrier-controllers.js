parsnipApp.controller('CarriersController', function($scope, $rootScope, Carrier) {
	$rootScope.topNav = TOP_NAV_CARRIERS;
    $scope.carriers = Carrier.query();
});

parsnipApp.controller('CarrierDetailsController', function($scope, $rootScope, $routeParams, Carrier) {
	$rootScope.topNav = TOP_NAV_CARRIERS;
	$scope.carrier = Carrier.get({carrierId:$routeParams.carrierId});
});

parsnipApp.controller('CreateCarrierController', function($scope, $rootScope, $location, Carrier) {
	$rootScope.topNav = TOP_NAV_CARRIERS;
	
	$scope.isCreate = true;
	$scope.carrier = new Carrier();
	$scope.save = function(carrier) {
		carrier.$save(function(carrier){
			$location.path("/carrier-details/" + carrier.id).search("carrierCreate",true);
		});
	}
	
});

parsnipApp.controller('EditCarrierController', function($scope, $rootScope, $routeParams, $location, Carrier) {
	$rootScope.topNav = TOP_NAV_CARRIERS;
	
	$scope.carrier = Carrier.get({carrierId:$routeParams.carrierId});
	$scope.save = function(carrier) {
		carrier.$save(function(carrier){
			$location.path("/carrier-details/" + carrier.id).search("carrierEdit",true);
		});
	}
});
