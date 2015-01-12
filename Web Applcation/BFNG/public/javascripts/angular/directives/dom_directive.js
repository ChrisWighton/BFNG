angular.module("dom.directive", [])

.directive('focus', function() {
	return {
		restrict: 'A',
		link: function(scope, elem, attrs) {
			$(function() {
				elem.focus();
			});
		}
	}
})

.directive('selectOnFocus', function() {
	return {
		restrict: 'A',
		link: function(scope, elem, attrs) {
			$(function() {
				$(elem).focus(function() {
					this.select();
				});
			});
		}
	}
})

;