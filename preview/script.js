"use strict";

const btn = document.querySelector("button"),
    btns = document.querySelectorAll("button"),
    link = document.querySelector("a");


// const checkClick = function () {
//     let i = 0;
//
//     i++;
//
//     if(i === 1) {
//         console.log("aa");
//         btn.removeEventListener("click", checkClick);
//     }
// }
//
// btn.addEventListener('click', checkClick);




link.addEventListener("click", event => {
    event.preventDefault();

    btns.forEach(item => {
        item.textContent = "#00dcff";
    });
});




