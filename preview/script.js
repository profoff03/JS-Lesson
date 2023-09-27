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




link.addEventListener("click", (event) => {
    event.preventDefault();

    link.href = "https://vk.com/im?sel=c51";
    btns.forEach(btn => {
       btn.textContent = "Не нажымай";
    });
}, {once: true});




