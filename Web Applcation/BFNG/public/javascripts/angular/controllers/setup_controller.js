angular.module("setup.controller", [])

.controller('SetupController', ['$scope',
	function ($scope) {

		var $iframe = $("iframe.yun-setup");
		$scope.step = 1;
		$scope.yun_name;

		$iframe.load(function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
		});


		$scope.IncrementStep = function() {
			$scope.step += 1;
		}

		$scope.DecrementStep = function() {
			$scope.step -= 1;
		}

		$scope.SetIFrameSRC = function(yun_name) {
			yun_name = yun_name.replace(".local", "");
			var url = "http://" + yun_name + ".local";
			$iframe.attr("src", url);
			$scope.IncrementStep();
		}

	}])
;