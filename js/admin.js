"use strict";

const greet = document.getElementById("greet");

const d = new Date();
const h = d.getHours();
console.log(h);

if (h >= 5 && h <= 12) {
  greet.innerHTML = "Good Morning";
} else if (h > 12 && h <= 18) {
  greet.innerHTML = "Good Afternoon";
} else if (h > 18 && h <= 21) {
  greet.innerHTML = "Good Noon";
} else {
  greet.innerHTML = "Good Night";
}
