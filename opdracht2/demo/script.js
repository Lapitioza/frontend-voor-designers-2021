console.log("bladeren js");

var photos = [
  "foto00.png",
  "foto01.jpg",
  "foto02.jpg",
  "foto03.jpg",
  "foto04.jpg",
  "foto05.jpg",
];
// de fotos die ingeladen worden.

var photoImg = document.querySelector("#photo");
var currentNumber = document.querySelector("#currentphoto");
var lastNumber = document.querySelector("#lastphoto");

var forwardButton = document.querySelector("#forward");
var backwardButton = document.querySelector("#backward");

var currentPhotoNumber = 0; // begint bij foto 0, voorblad.
showCurrentPhoto();

function showCurrentPhoto() {
  photoImg.src = "images/" + photos[currentPhotoNumber];
  currentNumber.textContent = currentPhotoNumber;
  lastNumber.textContent = photos.length - 1;
}
//Huidige nummer en totale aantal fotos.

function moveForward() {
  currentPhotoNumber = currentPhotoNumber + 1;
  if (currentPhotoNumber > photos.length - 1) {
    // als alle plaatjes op zijn dan moet het weer terug naar het begin.
    currentPhotoNumber = 1;
  }
  showCurrentPhoto();
}
// knop om vooruit te gaan

function moveBackward() {
  currentPhotoNumber = currentPhotoNumber - 1;
  if (currentPhotoNumber < 1) {
    // als je vanaf het begin terugklikt, dan moet de laatste foto getoond worden.
    currentPhotoNumber = photos.length - 1; 
  }
  showCurrentPhoto();
}
//knop om achteruit te gaan.

forwardButton.addEventListener("mouseover", moveForward);
backwardButton.addEventListener("mouseover", moveBackward);
//Mouseover past niet bij deze buttons, maar wel leuk om ermee te experimenteren.
