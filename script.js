//define our first song 
let homura = document.querySelector(".Homura");
let circle1 = document.querySelector(".circle1");

//result of the homura's gif
function turnhomura() {
    homura.classList.toggle("active")
    logoD.style.display = "none";
}

//add an event listner
//when someone clicks on the circle show Homura's gif

circle1.addEventListener("click",turnhomura);