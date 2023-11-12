"use strict";

const modalWindowTriggerOpen = document.querySelectorAll("[data-modal]"),
    modalWindowTriggerClose = document.querySelector("[data-close]"),
    modalWindow = document.querySelector(".modal");


const openModalWindow = function () {
    modalWindow.classList.add("show");
}

const closeModalWindow = function() {
    modalWindow.classList.remove("show");
    modalWindow.classList.add("hide");
}
   
//нужно добавить выход через клику вне модального окна и при нажатии кнопки escape

modalWindowTriggerOpen.forEach(item => {
    item.addEventListener("click", openModalWindow);
});

modalWindowTriggerClose.addEventListener("click", closeModalWindow);




