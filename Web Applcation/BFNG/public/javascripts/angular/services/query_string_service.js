angular.module("query_string.service", [])

.factory('QueryStringHelper', function() {
	
	var AvailableActions = [];
	var SelectedActions = [];

	var moveAction = {
		name: "move",
		data: {
			x_axis: 0,
			y_axis: 0
		},
		builder: BuildMoveAction
	}

	var fireAction = {
		name: "fire",
		data: {
			count: 0
		},
		builder: BuildFireAction
	}

	function QueryStringHelper() {
		AvailableActions.push(moveAction);
		AvailableActions.push(fireAction);
	}

	QueryStringHelper.prototype.FindAction = function(name) {
		for (var i = 0; i < AvailableActions.length; i++) {
			if (AvailableActions[i].name === name) {
				return $.extend(true, {}, AvailableActions[i]);
			}
		}
		console.log("No action exists with name: " + name);
	}

	QueryStringHelper.prototype.AddAction = function(action) {
		SelectedActions.push(action);
	}

	QueryStringHelper.prototype.BuildQueryString = function() {
		$.each(SelectedActions, function(index, action) {
			console.log(action);
		});
		SelectedActions = [];
	}

	

	function BuildMoveAction() {
		return "abc";
	}

	function BuildFireAction() {
		return "def";
	}

	return new QueryStringHelper;
})

;