// on déclare les variables pour se localiser dans le DOM
let $flux=  document.getElementById("flux");
let $btnPlayer= document.getElementById("play");


function playRadio() {
    $flux.play();
} ;


$btnPlayer.addEventListener('onclick', playRadio());


