"use strict";   


const firstListElement = document.querySelector(".number__list").firstElementChild;
const lastListElement = document.querySelector(".number__list").lastElementChild;
const bodyNodes = document.body.childNodes;

const firstDiv = document.querySelector(".first");
console.log(firstDiv.nextElementSibling.firstElementChild);

// console.log(firstListElement);


const childElements = function () {
    for (let item of bodyNodes) {
        if (item.nodeName === "#text" || item.nodeName === "#comment") {
            continue;
        } else {
            console.log(item);
        }
    }
}

// childElements();

