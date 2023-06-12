
// console.log(NaN || null || !3 || undefined || 5);
// console.log(NaN || null && !3 && undefined || 5);
// console.log(5 === 5 && 3 > 1 || 5);

// const iterationCount = 7;

// let a = "*";
// for (let i = 1; i < iterationCount; i++) {

//     for (let j = 0; j < i; j++) {
//         a += "**";
//     }

//     a += "\n";
// }

// const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

function enumirationArray(list) {
    for (let i = 0; i < 5; i++) {
        if (i === 3) return;
        console.log(`index: ${i}`)
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7];

enumirationArray();

const str = "Hello world!";

console.log(str.slice(6, 11));
console.log(str.slice(6));
console.log(str); 
