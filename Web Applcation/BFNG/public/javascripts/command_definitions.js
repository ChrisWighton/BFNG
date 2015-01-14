// GLOBAL COMMAND DEFINITIONS

// COMMAND DECLARATIONS - NOTE: the variable name MUST be the command name followed by "Command"
var MOVE_COMMAND_NAME = "move";
var FIRE_COMMAND_NAME = "fire";

var moveCommand = {
	name: MOVE_COMMAND_NAME,
	data: {
		x_axis: 0,
		y_axis: 0
	},
	validate: ValidateMoveCommand
}

var fireCommand = {
	name: FIRE_COMMAND_NAME,
	data: {
		count: 0
	},
	validate: ValidateFireCommand
}


// COMMAND VALIDATORS

function ValidateMoveCommand() {
	var max_x_axis = 60;
	var max_y_axis = 70;

	if (this.data.x_axis === "" || isNaN(this.data.x_axis)) {
		return "please provide a numerical X_Axis value";
	}

	if (this.data.y_axis === "" || isNaN(this.data.y_axis)) {
		return "please provide a numerical Y_Axis value";
	}

	if (this.data.x_axis > max_x_axis)
		this.data.x_axis = max_x_axis;
	if (this.data.x_axis < -1 * max_x_axis)
		this.data.x_axis = -1 * max_x_axis;

	if (this.data.y_axis < 0)
		this.data.y_axis = 0;
	if (this.data.y_axis > max_y_axis)
		this.data.y_axis = max_y_axis;

	return "";
}

function ValidateFireCommand() {
	var max_fire_count = 4;

	if (this.data.count > max_fire_count)
		this.data.count = max_fire_count;

	return "";
}


// COMMAND BUILDERS

// Default builder for a command
// - single data: /[command_name]/[data]
// - multiple data: /[command_name]/[data_a]:[data_b]
function BuildDefaultAction(command) {
	var delim = "";
	var dataString = "";
	for(var i in command.data) {
		dataString += delim + command.data[i];
		delim = ":";
	}
	return "/" + command.name + "/" + dataString;
}

