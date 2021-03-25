//define our first song 
let homura = document.querySelector(".Homura");
let circle1 = document.querySelector(".circle1");

//result of the homura's gif
function turnhomura() {
    homura.classList.toggle("active")
}
//add an event listner
//when someone clicks on the circle show Homura's gif

circle1.addEventListener("click",turnhomura);

//koi老婆！！！
//define our second song 
let koi = document.querySelector(".Koi");
let circle2 = document.querySelector(".circle2");

//result of the homura's gif
function turnkoi() {
    koi.classList.toggle("active")
}

//add an event listner
//when someone clicks on the circle show Homura's gif

circle2.addEventListener("click",turnkoi);