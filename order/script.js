function OrderFormController($scope){

	$scope.tools = [
		{
			name: 'Laptop',
			price: 1600,
			active:false
		},{
			name: 'Ek depolama hafizasi(500GB)',
			price: 100,
			active:false
		},{
			name: 'Klavye',
			price: 20,
			active:false
		},{
			name: 'Usb',
			price: 15,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};


	$scope.total = function(){

		var total = 0;

		angular.forEach($scope.tools, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
