angular.module("command.service", [])

.factory('CommandHelper', ['CommonHelper', function(CommonHelper) {

	var SelectedCommands = [];

	function CommandHelper() { }

	CommandHelper.prototype.GetSelectedCommands = function() {
		return SelectedCommands;
	}

	// Attempts to find a command based on the command name and returns a deep clone	
	CommandHelper.prototype.FindAndCloneCommand = function(name) {
		var command = window[name + "Command"];
		if (command != null) {
			return $.extend(true, {}, command);
		}
		console.log("No action exists with name: " + name);
	}

	// Adds the supplied commands to the list of selected actions
	CommandHelper.prototype.AddAction = function(name, data) {
		var command = this.FindAndCloneCommand(name);
		if (command != null) {
			if (CommonHelper.CountDataKeys(command.data) !== CommonHelper.CountDataKeys(data)) {
				console.log("Invalid data supplied. We need this: " + command.data);
				return;
			}

			if (CommonHelper.AssignDataValues(command.data, data)) {
				SelectedCommands.push(command);
			}
		}
	}

	CommandHelper.prototype.ResetSelectedCommands = function() {
		SelectedCommands = [];
	}

	return new CommandHelper;
}])
;