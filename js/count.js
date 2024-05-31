"use strict";

const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
let count = document.querySelectorAll(".count");
let total = document.querySelectorAll(".price");
let totalSumDisplays = document.querySelectorAll(".totalSum");
let totalSum = document.querySelector(".total");

let initialPrices = Array.from(total).map((element) =>
  parseFloat(element.textContent.replace(/[^0-9.-]+/g, ""))
);

window.addEventListener("DOMContentLoaded", () => {
  updateTotal();
});

plus.forEach((p, index) => {
  p.addEventListener("click", (el) => {
    let co = parseInt(count[index].textContent);
    count[index].textContent = ++co;
    // console.log(count[index].textContent);

    total[index].textContent = (initialPrices[index] * co).toFixed(2);
    updateTotal();
  });
});

minus.forEach((m, index) => {
  m.addEventListener("click", (el) => {
    let co = parseInt(count[index].textContent);
    count[index].textContent = --co;

    if (co < 1) {
      co = 1;
    } else {
      total[index].textContent = (initialPrices[index] * co).toFixed(2);
      updateTotal();
    }

    if (count[index].textContent <= 1) count[index].textContent = 1;
  });
});

function updateTotal() {
  let sum = 0;
  total.forEach((element, index) => {
    sum += parseFloat(element.textContent);
  });
  // Update the total sum
  totalSumDisplays.forEach((display) => {
    display.textContent = sum.toFixed(2);
    totalSum.value = sum.toFixed(2);
    console.log(totalSum);
  });
}

// console.log(document.getElementById("pay_total").textContent);

const totalCount = document.querySelectorAll(".count").forEach((co, index) => {
  function countSpanTags() {
    console.log(co[index].textContent);
    return co[index].textContent;
  }
});

const order_id = document.getElementById("random_id");
function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

// Example usage: Generate a random string with 8 characters
const randomString = generateRandomString(8);
order_id.textContent = randomString;
console.log(randomString);
