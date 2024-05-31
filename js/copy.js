"use strict";

// function myFunction() {
//   var copyText = document.getElementById("myInput");
//   copyText.select();
//   copyText.setSelectionRange(0, 99999);
//   navigator.clipboard.writeText(copyText.value);

//   var tooltip = document.getElementById("myTooltip");
//   tooltip.innerHTML = "Copied: " + copyText.value;
// }

// function outFunc() {
//   var tooltip = document.getElementById("myTooltip");
//   tooltip.innerHTML = "Copy to clipboard";
// }

//*=======================================================================

function copy(that) {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";

  var inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = that.textContent;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
}
