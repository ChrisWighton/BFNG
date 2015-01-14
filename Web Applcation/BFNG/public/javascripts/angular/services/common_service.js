angular.module("common.service", [])

.factory('CommonHelper', function() {

	function CommonHelper() { }

	// Returns the number of keys in the object
	CommonHelper.prototype.CountDataKeys = function(data) {
		var count = 0;
		for(var i in data) {
			if (data.hasOwnProperty(i)) {
				count++;
			}
		}
		return count;
	}

	// Assings the data values from the supplied data to the action data
	// assuming the action data has each key from the supplied data
	CommonHelper.prototype.AssignDataValues = function(actionData, suppliedData) {
		for (var i in suppliedData) {
			if (actionData.hasOwnProperty(i)) {
				actionData[i] = suppliedData[i]
			} else {
				console.log("Supplied data key " + i + " does not exist on Action data: " + actionData);
				return false;
			}
		}
		return true;
	}

	return new CommonHelper;
})
;