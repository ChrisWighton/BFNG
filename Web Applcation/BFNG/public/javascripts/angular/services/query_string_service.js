angular.module("query_string.service", [])

.factory('QueryStringHelper', function() {

	function QueryStringHelper() { }

	// Builds the query string based on the included commands
	QueryStringHelper.prototype.BuildQueryString = function(ipaddress, commands) {
		
		var errorMsg = "";
		var isValid = true;

		if (ipaddress != "") {
			var queryString = ipaddress + "/arduino";

			for (var i = 0; i < commands.length; i++) {
				var command = commands[i];
				
				errorMsg = command.validate();

				if (errorMsg.length === 0) {
					if (command.hasOwnProperty("build")) {
						queryString += command.build();
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