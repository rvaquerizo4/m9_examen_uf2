//Guardem el video a la constant video
const video = document.getElementById("mi-video");
//Guardem els botons a constants
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');


//Haz que se ejecute al comienzo de todo (autoplay)
video.play();


//Quan fas click al boto fa play al video
playButton.addEventListener('click', () => {
    if (video.paused){
        video.play();
    }
    else{
        //alerta si el video se esta reproduint ya salta.
        window.alert("El video se esta reproduint ya");
    }
  });

//Quan fas click al boto fa pause al video
pauseButton.addEventListener('click', () => {
    video.pause();
    });


//Caja
const caja = document.querySelector(".quadrat");
const play_animation = () => {
    caja.classList.add("quadrat-animation");
}