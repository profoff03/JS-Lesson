"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {

    let result = "";

    arr.length === 0 ? result = "Семья пуста" : result = "Семья состоит из: ";

    for (let key of arr) {
        result += `${key} `;
    }

    return result;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let key of arr) {
        console.log(key.toLowerCase());
    }
}