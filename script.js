console.log("hi")

let play = document.getElementById("play")
let pause = document.getElementById("pause")
pause.addEventListener("click", pausefunction)
play.addEventListener("click", playfunction)

carouselitem = document.getElementsByClassName("carousel-item");


function pausefunction() {
    console.log("pause function has been clicked")
    
    carouselitem.setAttribute("data-bs-pause", "true")
}

function playfunction() {
    console.log("play button has been clicked")
    carouselitem.setAttribute("data-bs-pause", "false")
}
