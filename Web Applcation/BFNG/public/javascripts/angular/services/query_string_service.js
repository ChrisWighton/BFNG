angular.module("query_string.service", [])

.factory('QueryStringHelper', function() {
	
	var qs_http = "http://";
	var qs_api = "arduino/api"

	function QueryStringHelper() { }

	// Builds the query string based on the included commands
	QueryStringHelper.prototype.BuildQueryString = function(ipaddress, commands) {
		
		var errorMsg = "";
		var isValid = true;

		if (ipaddress != "") {
			var queryString = qs_http + ipaddress + "/" + qs_api;

			for (var i = 0; i < commands.length; i++) {
				var command = commands[i];
				
				errorMsg = command.validate(command);

				if (errorMsg.length === 0) {
					if (command.hasOwnProperty("build")) {
						queryString += command.build(command);
					} else {
						queryString += BuildDefaultAction(command);
					}
				} else {
					isValid = false;
					break;
				}
			}
		} else {
			isValid = false;
			errorMsg = "please provide an ip address";
		}

		if (isValid) {
			console.log(queryString);
			return queryString;
		} else {
			alert(errorMsg);
			return "";
		}
	}

	return new QueryStringHelper;
})
;