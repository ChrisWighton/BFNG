angular.module("main.controller", [])

.controller('MainController', ['$scope', 'CommandHelper', 'QueryStringHelper', 'AjaxHelper',
	function ($scope, CommandHelper, QueryStringHelper, AjaxHelper) {

		$scope.ip_address = arduinoAddress;
		$scope.x_axis = 0;
		$scope.y_axis = 0;
		$scope.firecount = 1;
		$scope.selectedvulcan = "vulcan1";

		$scope.TestConnection = function() {
			var ip_address = $scope.ip_address;

			CommandHelper.AddAction(MOVE_COMMAND_NAME, { x_axis: 10, y_axis: 10 });
			var queryString = QueryStringHelper.BuildQueryString(ip_address, CommandHelper.GetSelectedCommands());
			var request = AjaxHelper.Get(queryString);

			if (queryString !== "") {
				$scope.SendRequest(queryString);
			}
		}

		$scope.SendCommand = function() {
			var selectedvulcan = $scope.selectedvulcan;
			var x_axis = $scope.x_axis;
			var y_axis = $scope.y_axis;
			var firecount = $scope.firecount;

			// Get the query string
			CommandHelper.AddAction(MOVE_COMMAND_NAME, { x_axis: x_axis, y_axis: y_axis });
			CommandHelper.AddAction(FIRE_COMMAND_NAME, { count: firecount });
			
			var baseAddress = QueryStringHelper.BuildBaseAddress(selectedvulcan);
			var queryString = QueryStringHelper.BuildQueryString(baseAddress, CommandHelper.GetSelectedCommands());

			if (queryString !== "") {
				$scope.SendRequest(queryString);
			}
		}

		$scope.SendRequest = function(queryString) {
			var request = AjaxHelper.Get(queryString);
			$scope.query = queryString;
			$scope.response = "";

			$scope.ShowLoading();
			var $responseInput = $("input#response");

				// request success
				request.done(function(data, status, xhr) {
					$responseInput.removeClass("error").addClass("success");
					$scope.response = xhr.status + " - " + status;
				})
				// request failure
				.fail(function(xhr, status, error) {
					$responseInput.removeClass("success").addClass("error");
					$scope.response = xhr.status + " - " + error;
				})
				// request finally
				.always(function(xhr, status, error) {
					CommandHelper.ResetSelectedCommands();
					$scope.HideLoading();
					$("html, body").animate({
						scrollTop: $responseInput.offset().top
					}, 1000);
					$scope.$apply();
				});
			}
		}])
;