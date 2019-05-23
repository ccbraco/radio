// on déclare les variables pour se localiser dans le DOM
// let $flux=  document.getElementById("flux");
// let $btnPlayer= document.getElementById("play");
// let $btnStop=document.getElementById("stop");

// function PlayRadio() {
//     if ($flux.paused) {
//         $flux.play() 
//       } else {
//         $flux.pause() 
//       }

// } ;
// function stopRadio(){
//     $flux.pause();
// }

//$btnPlayer.addEventListener('onclick', PlayRadio());
// $btnStop.addEventListener('onclick', stopRadio());


//                 test emmanuel 

let audioPlayer = document.getElementById("audioplayer"),
audioTrack = document.getElementById("audiotrack"),
playButton = document.createElement("button");

playButton.type = "button";
audioPlayer.appendChild(playButton);
audioTrack.removeAttribute("controls");
setText(playButton, "Play");

let trackProgress = document.createElement("progress");
trackProgress.setAttribute("src", "08-Exo-Politics.mp3");
audioPlayer.appendChild(trackProgress);

let muteButton = document.createElement("button");
setText(muteButton, "Mute");
audioPlayer.appendChild(muteButton);

let volumeLevel = document.createElement("input");
volumeLevel.type = "range";
audioPlayer.appendChild(volumeLevel);

function setText(el,text) {
    el.innerHTML = text;
}
function player(){
    if (audioTrack.paused) {
        setText(playButton, "Pause");
        audioTrack.play();
    }else{
        setText(playButton, "Play" );
        audioTrack.pause();
    }
}

function muter() {
    if (audioTrack.volume === 0) {
        audioTrack.volume = storedValue;
        volumeLevel.value = storedValue;
    }else{
        storedValue = volumeLevel.value;
        volumeLevel.value = 0;
        audioTrack.volume = 0;
    }
}

function setAttributes(el, attributes) {
    for(var key in attributes){
    el.setAttribute(key, attributes[key]);
    }
}

function volumeControl(){
    if (audioTrack.volume === 0){
        setText(muteButton,"Unmute");
    }else {
        setText(muteButton,"Mute");
    }
}

function backToStart(){
    audioTrack.currentTime = 0;
    setText(playButton, "Play");
}


setAttributes(volumeLevel, {"type": "range", "min": "0" , "max": "1" , "step": "any" , "value": "0.75"});
playButton.addEventListener("click", player);
muteButton.addEventListener("click", muter);
volumeLevel.addEventListener("input", function(){
 audioTrack.volume = volumeLevel.value;
});
audioTrack.addEventListener("volumechange", volumeControl);
audioTrack.addEventListener("ended", backToStart);
