angular.module("main.controller", [])

.controller('MainController', ['$scope', 'CommandHelper', 'QueryStringHelper',
	function ($scope, CommandHelper, QueryStringHelper) {

		$scope.ip_address = "myArduinoYun.local";
		$scope.x_axis = 0;
		$scope.y_axis = 0;
		$scope.firecount = 1;

		$scope.fire = function() {
			var ip_address = $scope.ip_address;
			var x_axis = $scope.x_axis;
			var y_axis = $scope.y_axis;
			var firecount = $scope.firecount;

			// Get the query string
			CommandHelper.AddAction(MOVE_COMMAND_NAME, { x_axis: x_axis, y_axis: y_axis });
			CommandHelper.AddAction(FIRE_COMMAND_NAME, { count: firecount });
			
			$scope.query = QueryStringHelper.BuildQueryString(ip_address, CommandHelper.GetSelectedCommands());
			CommandHelper.ResetSelectedCommands();
		};
	}])
;