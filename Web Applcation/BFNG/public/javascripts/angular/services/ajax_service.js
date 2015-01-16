angular.module("ajax.service", [])

.factory('AjaxHelper', function() {

	function AjaxHelper() { }

	AjaxHelper.prototype.Get = function(query, data) {
		if (data == null) {
			data = {};
		}
		return this.Send(query, "GET", data);
	}

	AjaxHelper.prototype.Post = function(query, data) {
		if (data == null) {
			data = {};
		}
		return this.Send(query, "POST", data);
	}


	AjaxHelper.prototype.Send = function(query, type, data) {

		return $.ajax({
			url: query,
			type: type,
			data: data,
			timeout: 7500
		});
	}

	return new AjaxHelper;
})
;