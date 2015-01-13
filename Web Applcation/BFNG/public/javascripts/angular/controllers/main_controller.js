angular.module("main.controller", [])

.controller('MainController', ['$scope', 'QueryStringHelper',
	function ($scope, QueryStringHelper) {

		var moveAction = QueryStringHelper.FindAction("move");

		$scope.ip_address = "192.168.0.1";

		$scope.pitch = moveAction.data.x_axis;
		$scope.yaw = moveAction.data.y_axis;

		$scope.fire = function() {
			var ip_address = $scope.ip_address;
			var pitch = $scope.pitch;
			var yaw = $scope.yaw;



			if (ip_address == null) {
				alert("please provide an ip address");
				return;
			}
			if (pitch === "" || isNaN(pitch)) {
				alert("please provide a numerical value for pitch");
				return;
			}
			if (yaw === "" || isNaN(yaw)) {
				alert("please provice a numberical value for yaw");
				return;
			}

			pitch = pitch % 360;
			yaw = yaw % 360;


			moveAction.data.x_axis = pitch;
			moveAction.data.y_axis = yaw;
			QueryStringHelper.AddAction(moveAction);
			QueryStringHelper.BuildQueryString();

			alert("Firing @ " + ip_address + " - [pitch: " + pitch + ", yaw: " + yaw + "]");

			$scope.pitch = pitch;
			$scope.yaw = yaw;
		};
	}])
;