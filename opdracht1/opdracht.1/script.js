var roodImg = document.getElementById("rood");
var oranjeImg = document.getElementById("oranje");
var geelImg = document.getElementById("geel");
var groenImg = document.getElementById("groen");
var blauwImg = document.getElementById("blauw");
var paarsImg = document.getElementById("paars");
//Alle plaatjes benoemen die in de array komen

var button = document.getElementById("button");

var images = [roodImg, oranjeImg, geelImg, groenImg, blauwImg, paarsImg];
//Plaatjes in een array waardoor ze op volgorde aangeklikt kunnen worden

function selectImage(image, index) {
  var src = "img/grijs" + (index + 1) + ".png";
  image.src = src;
  console.log(src);
}
//De plaatjes veranderen van de kleur naar grijs

var selectedColors = [];

images.forEach((image, index) => {
  var color = image.id;
  image.addEventListener("click", function () {
    selectImage(image, index);
    selectedColors.push(color);
    console.log(selectedColors);
    //Bron: hulp van een vriend gekregen, want ik kwam er niet uit.

    if (selectedColors.length === 3) {
      button.classList.add("active");
    }
  });
});
//Wanneer men 3 kleuren kiest, wordt de CSS van de button veranderd.

function classChange() {
  var dePlaatjes = document.getElementById("plaatjes");
  dePlaatjes.classList.remove("hidden");
}

button.addEventListener("click", function () {
  classChange();
});
//Dit zorgt ervoor dat de plaatjes zichtbaar worden wanneer je op de button klikt.
