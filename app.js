var yello = document.querySelector(".primary-header-content");
var rad = document.getElementsByClassName("primary-content")[0];
var linxContainer = document.getElementById("header-links");
var linx = document.querySelectorAll(".header-link-item");
var dives = document.getElementsByTagName("div");
var hachthree = document.getElementsByTagName("h3")[0];

yello.style.backgroundColor = "darkgrey";

console.log(linx);

hachthree.style.fontSize = "5vh";
hachthree.style.color = "white";

for (let i = 0; i < linx.length; i += 2) {
  linx[i].draggable = true;
}
