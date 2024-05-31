"use strict";

// document.addEventListener("DOMContentLoaded", () => {
const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
  icon.innerHTML = `<ion-icon  class="ion" name="heart-outline"></ion-icon>`;

  let isRed = true;
  icon.addEventListener("click", (e) => {
    //   icon.style.backgroundColor = "red";
    if (isRed) {
      icon.innerHTML = `<ion-icon style="color:red" name="heart"></ion-icon>`;
    } else {
      icon.innerHTML = `<ion-icon class="ion" name="heart-outline"></ion-icon>`;
    }

    isRed = !isRed;
  });
});

//* Icon_grid to change grid
const grid = document.querySelector(".icon_grid");
const grid_box = document.querySelector(".main_container");
const box_txt = document.querySelectorAll(".box_txt");
const h1 = document.querySelectorAll("#h1");
let len = h1.length;
grid_box.style.gridTemplateColumns = "repeat(5, 1fr)";

grid.addEventListener("click", () => {
  let cur_grid = grid_box.style.gridTemplateColumns;

  if (cur_grid == "repeat(5, 1fr)") {
    grid_box.style.gridTemplateColumns = "repeat(4, 1fr)";
  } else if (cur_grid == "repeat(4, 1fr)") {
    grid_box.style.gridTemplateColumns = "repeat(3, 1fr)";

    //* fontsize change-------------
    for (let i = 0; i < len; i++) {
      box_txt[i].style.fontSize = "1.6rem";
      box_txt[i].style.fontSize = "1.8rem";
      h1[i].style.fontSize = "2.2rem";
      h1[i].style.fontSize = "2.5rem";
    }
  } else if (cur_grid == "repeat(3, 1fr)") {
    grid_box.style.gridTemplateColumns = "repeat(6, 1fr)";

    //* fontsize change-------------
    for (let i = 0; i < len; i++) {
      box_txt[i].style.fontSize = "1.6rem";
      box_txt[i].style.fontSize = "1.5rem";
      h1[i].style.fontSize = "2.2rem";
      h1[i].style.fontSize = "2rem";
    }
  } else if (cur_grid == "repeat(6, 1fr)") {
    grid_box.style.gridTemplateColumns = "repeat(7, 1fr)";

    //* fontsize change-------------
    for (let i = 0; i < len; i++) {
      box_txt[i].style.fontSize = "1.6rem";
      box_txt[i].style.fontSize = "1.3rem";
      h1[i].style.fontSize = "2.2rem";
      h1[i].style.fontSize = "1.8rem";
    }
  } else {
    grid_box.style.gridTemplateColumns = "repeat(5, 1fr)";
    box_txt[i].style.fontSize = "1.8rem";
    h1[i].style.fontSize = "2.2rem";
  }
});

console.log(h1.length);

// });

// window.onload = () => {

//   Array.from(icons).forEach((icon) => {
//     console.log(icon.textContent);
//     let html = `<ion-icon style="color:red" name="heart"></ion-icon>`;
//     ion.innerHTML = html;
//   });
// };

//* ascending box by name
