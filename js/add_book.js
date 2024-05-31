"use strict";

const price = document.querySelector(".price");

price.addEventListener("click", (err) => {
  if (price.value <= 0) {
    price.value = 0;
  }
});
