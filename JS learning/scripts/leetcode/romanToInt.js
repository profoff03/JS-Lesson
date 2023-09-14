const romanNumerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {
    let sumRomanNumbers = 0;
    for (let i of s) {
        for(let j in romanNumerals) {
            // console.log(j);
            if(i === j) {
                sumRomanNumbers += romanNumerals[`${j}`];
                break;
            }
        }
    }  

    return sumRomanNumbers;
};

const s = "MCMXCIV";
const result = romanToInt(s);
console.log(result);
