//define our variable
let myMessage = document.querySelector(".message");

console.log(myMessage);

myMessage.innerText = "Hello";
myMessage.style.color = "000000";
myMessage.style.marginTop = "200px";

myMessage.classList.add("big");

///create new elements

//define and create element
let newMessage = document.createElement("h2");

//add new class to our h2
newMessage.classList.add("SongTitle");

//add new messgae
newMessage.innerText = "Mean it - Lany";
//adding our new h2 elements to the page
//define
document.querySelector(".container").append(newMessage);

//new Image
let newImage = document.createElement("img");

//add 
newImage.classList.add("MeanIt");

//link
newImage.src = "./photo/mean.gif";

//add image to the page
document.querySelector(".container").append(newImage);


//----------------------------------------------

//message two starts here!
let messageTwo = document.createElement("h2");

//add new class to message 2
messageTwo.classList.add("SongTitle2");

//add text to message 2
messageTwo.innerText = "Miss You 300";

//add message 2 to our container
document.querySelector(".container").append(messageTwo);


//image 2
let imageTwo = document.createElement("img");

//add class to image 2
imageTwo.classList.add("XJN");

// add link to image 2
imageTwo.src = "./photo/xjn.gif";

//add image 2 to page
document.querySelector(".container").append(imageTwo);

//----------------------------------------------

//message two starts here!
let messageThree = document.createElement("h2");

//add new class to message 3
messageThree.classList.add("SongTitle3");

//add text to message 2
messageThree.innerText = "我以为 - 品冠";

//add message 3 to our container
document.querySelector(".container").append(messageThree);


//image 2
let imageThree = document.createElement("img");

//add class to image 3
imageThree.classList.add("wyw");

// add link to image 3
imageThree.src = "./photo/woyiwei.gif";

//add image 3 to page
document.querySelector(".container").append(imageThree);

//----------------------------------------------

//message four starts here!
let messageFour = document.createElement("h2");

//add new class to message 4
messageFour.classList.add("SongTitle4");

//add text to message 4
messageFour.innerText = "i'm so tired... - Lauv & Troye Sivan ";

//add message 4 to our container
document.querySelector(".container").append(messageFour);


//image 2
let imageFour = document.createElement("img");

//add class to image 3
imageFour.classList.add("im");

// add link to image 3
imageFour.src = "./photo/i'm.gif";

//add image 4 to page
document.querySelector(".container").append(imageFour);

//----------------------------------------------

//message five starts here!
let messageFive = document.createElement("h2");

//add new class to message 4
messageFive.classList.add("SongTitle5");

//add text to message 5
messageFive.innerText = "Unbreakable Love - Eric Chou ";

//add message 5 to our container
document.querySelector(".container").append(messageFive);


//image 2
let imageFive = document.createElement("img");

//add class to image 3
imageFive.classList.add("ul");

// add link to image 3
imageFive.src = "./photo/ybsl.png";

//add image 4 to page
document.querySelector(".container").append(imageFive);

//----------------------------------------------

//message six starts here!
let messageSix = document.createElement("h2");

//add new class to message 6
messageSix.classList.add("SongTitle6");

//add text to message 5
messageSix.innerText = "Your Name Engraved Herein - Jolin Tsai X Hebe ";

//add message 6 to our container
document.querySelector(".container").append(messageSix);


//image 2
let imageSix = document.createElement("img");

//add class to image 3
imageSix.classList.add("kzw");

// add link to image 3
imageSix.src = "./photo/kzw.gif";

//add image 4 to page
document.querySelector(".container").append(imageSix);