// on déclare les variables pour se localiser dans le DOM
let $flux=  document.getElementById("flux");
let $btnPlayer= document.getElementById("play");


function myPlay() {
    $flux.play();
} ;


$btnPlayer.addEventListener('onclick', myPlay());


