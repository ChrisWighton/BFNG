
function fire() {
	var input_ip_address = document.getElementById("ipaddress");
	var input_pitch = document.getElementById("pitch");
	var input_yaw = document.getElementById("yaw");

	var ip_address = input_ip_address.value;
	var pitch = input_pitch.value;
	var yaw = input_yaw.value;

	if (ip_address == null) {
		alert("please provide an ip address");
		return;
	}
	if (pitch == "" || isNaN(pitch)) {
		alert("please provide a numerical value for pitch");
		return;
	}
	if (yaw == "" || isNaN(yaw)) {
		alert("please provice a numberical value for yaw");
		return;
	}

	pitch = pitch % 360;
	yaw = yaw % 360;

	alert("Firing @ " + ip_address + " - [pitch: " + pitch + ", yaw: " + yaw + "]");

	input_pitch.value = pitch;
	input_yaw.value = yaw;
}