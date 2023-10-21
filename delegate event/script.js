"USE STRICT";

const wrapper = document.querySelector(".btn-block");
const btns = wrapper.querySelectorAll("button");

wrapper.addEventListener("click", (event) => {
    if(event.target && event.target.tagName == "BUTTON") {
        if(event.target.classList.contains("red")) {
            event.target.classList.remove("red");
            event.target.classList.add("blue");
        } else {
            event.target.classList.add("red");
        }
    }
});