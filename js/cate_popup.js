"use strict";

const cate = document.getElementById("cate_popup");
const popup = document.querySelector(".cate_nav");
// const arrow = document.getElementById("down");
const overlay = document.getElementById("overlay");

const openModal = function () {
  popup.classList.toggle("hidden_cate");
  //   arrow.classList.toggle("down");
};
const closeModal = function () {
  popup.classList.add("hidden_cate");
  //   arrow.classList.remove("down");
};

cate.addEventListener("click", openModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !popup.classList.contains("hidden_cate")) {
    closeModal();
  }
});

//* for receipt popup----------------------
const receipt = document.querySelector(".receipt_icon");
const close_receipt = document.querySelector(".icon_close");
const receipt_box = document.querySelector(".receipt");
const shadow = document.querySelector(".shadow_bg");
const printFun = document.querySelector(".print");

receipt.addEventListener("click", (ev) => {
  receipt_box.classList.toggle("hidden");
  shadow.classList.remove("hidden");
});

close_receipt.addEventListener("click", (ev) => {
  receipt_box.classList.add("hidden");
  shadow.classList.add("hidden");
});

shadow.addEventListener("click", (ev) => {
  receipt_box.classList.add("hidden");
  shadow.classList.add("hidden");
});

// printFun.addEventListener("click", (ev) => {
//   window.print();
// });

function printDiv(divId) {
  var printContents = document.getElementById(divId).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}
