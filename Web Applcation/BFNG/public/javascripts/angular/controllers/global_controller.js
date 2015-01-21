angular.module("global.controller", [])

.controller('GlobalController', ['$scope',	
	function ($scope) {

		var $loadingCloak = $("div.loading-cloak");
		$scope.ShowLoading = function() {	
			$loadingCloak.show();
		};

		$scope.HideLoading = function() {
			$loadingCloak.hide();
		};

	}])
;