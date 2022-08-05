"use strict";

button = document.querySelectorAll(".button"); //button.array.forEach(element => {
//  button.addEventListener("click", console.log("hi")}

button.forEach(function (element) {
  element.addEventListener("click", function () {
    console.log("hi");
  });
});