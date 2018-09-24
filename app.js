// JS DOM

// DOM element selectors
let paragraph = document.getElementsByTagName("p");
let header = document.getElementsByClassName("primary-header")[0];
let para = document.getElementsByClassName("para");

let para2 = document.querySelectorAll("p");
let div = document.querySelectorAll("div");

console.log(div);
console.log(paragraph);

// console.log(paragraph);
// para2[0].style.backgroundColor = "green";
div[1].innerHTML += "<p class='para'>look at me</p>";
console.log(para[1].className);
para[1].className = "";
para2[0].innerHTML = "does this work";
para2[0].innerText = "how about this";
