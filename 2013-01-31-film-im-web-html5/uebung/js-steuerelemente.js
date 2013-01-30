function play() {
   var video = document.getElementById("video");
   var button = document.getElementById("play");
   if (video.paused) {
      video.play();
      button.textContent = "Pause"; //setze die richtige Methode
   } else {
      video.pause();
      button.textContent = "Play"; //setze die richtige Methode
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