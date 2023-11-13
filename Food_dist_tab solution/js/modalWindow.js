"use strict";

const modalWindowTriggerOpen = document.querySelectorAll("[data-modal]"),
    modalWindowTriggerClose = document.querySelector("[data-close]"),
    modalWindow = document.querySelector(".modal");


const openModalWindow = function () {
    modalWindow.classList.remove("hide");
    modalWindow.classList.add("show");
    document.body.style.overflow = "hidden";
    clearInterval(modalWinowTimerId);
}

const closeModalWindow = function () {
    modalWindow.classList.remove("show");
    modalWindow.classList.add("hide");
    document.body.style.overflow = "";
}

//нужно добавить выход через клику вне модального окна и при нажатии кнопки escape

modalWindowTriggerOpen.forEach(item => {
    item.addEventListener("click", openModalWindow);
});

modalWindowTriggerClose.addEventListener("click", closeModalWindow);

modalWindow.addEventListener("click", (e) => {
    if(e.target === modalWindow) {
        closeModalWindow();
    }
})

document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modalWindow.classList.contains("show")) {
        closeModalWindow();
    }
})

const modalWinowTimerId = setTimeout(openModalWindow, 5000);

const showModalWindowByScroll = function() {
    if( window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {  
        openModalWindow();
        window.removeEventListener("scroll", showModalWindowByScroll);
    }
}


window.addEventListener("scroll", showModalWindowByScroll);







