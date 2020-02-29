var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	let vol  = document.querySelector("#volume");
	vol.innerHTML=video.volume * 100 + "%";
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	  let rate = video.playbackRate*0.8;
	  video.playbackRate = rate;
	  console.log("Speed is "+video.playbackRate);
}

function increaseSpeed() {
	let rate = video.playbackRate*1.25;
	video.playbackRate = rate;
	console.log("Speed is "+video.playbackRate);
}

function skipAhead() {
	if (video.currentTime > video.duration){
		video.currentTime = 0;
		video.playbackRate = 1;
		console.log("Current location is "+video.currentTime);
	}
	else{
		video.currentTime += 60;
		console.log("Current location is "+video.currentTime);
	}
}

function mute() {
  	if (video.muted == true){
		  video.muted = false;
		  document.querySelector('#mute').innerHTML="Muted";
		  console.log("Change to muted");

	}
  	else{
		  video.muted = true;
		  document.querySelector('#mute').innerHTML="Unmuted";
		  console.log("Change to Unmuted");
	}
}

function changeVolume() {
	var vol = document.querySelector("#volume");
	var slider = document.querySelector("#volumeSlider");
	video.volume = slider.value/100;
	vol.innerHTML=slider.value + "%";
	console.log("Volume is "+video.volume*100 + "%");
}

function gray() {
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color");
}