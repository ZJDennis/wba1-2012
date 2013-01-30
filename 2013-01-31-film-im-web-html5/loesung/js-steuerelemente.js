function play() {
	var video = document.getElementById("video");
	var button = document.getElementById("play");
	if (video.paused) {
		video.; //setze die richtige Methode
		button.textContent = "Pause"; 
	} else {
		video.; //setze die richtige Methode
		button.textContent = "Play";
	}
}

function zumanfang() {
	var video = document.getElementById("video");
	video.currentTime = 0;
}

function spulen(wert) {
	var video = document.getElementById("video");
	video.currentTime += wert;
}      