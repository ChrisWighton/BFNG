angular.module("global.controller", [])

.controller('GlobalController', ['$scope',	
	function ($scope) {

		var $loadingCloak = $("div.loading-cloak");
		var $textSpan = $loadingCloak.find("span").first();
		
		$scope.ShowLoading = function(text) {

			if (text != undefined || text != null) {
				$textSpan.text(text);
			}

			$loadingCloak.show();
		};

		$scope.HideLoading = function(text) {
			$textSpan.text("");
			$loadingCloak.hide();
		};

	}])
;