"use strict";

const someString = 'This is some strange string';

function reverse(str) {
    return str.split("").reverse().join("");
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    
    let result = "";

    arr.length === 0 ? result = "Нет доступных валют" : result = "Доступные валюты:\n";

    for(let key of arr) {
        if (key !== missingCurr) {
            result += key + "\n";
        }
    }

    return result;
}