"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

const s = ["sam", undefined, undefined].join(", ");
console.log(s);

//second solution
function sortStudentsByGroups(arr) {
    const maxIndexPersonInPairs = (arr.length / 3) * 3 - 1;
    let fixCycleIndex = 0;
    const pairsArray = [];
    for (let i = 0; i < arr.length / 3; i++) {
        const subArray = [];
        if (i > maxIndexPersonInPairs) {
            for (let k = fixCycleIndex; k < arr.length; k++) {
                if (arr[k] !== undefined) {
                    subArray.push(arr[k]);
                } else {
                    continue;
                }
            }
            pairsArray.push(`Оставшиеся студенты: ${subArray.length === 0 ? "-" : subArray.join(", ")}`);

        } else {
            for (let j = 0; j <= 2; j++) {
                subArray.push(arr[fixCycleIndex]);
                fixCycleIndex++;
            }
    
            pairsArray.push(subArray);
        }
    }

    return pairsArray;
}

const pairsArray = sortStudentsByGroups(students);
console.log(pairsArray);


//first solution
// function sortStudentsByGroups(arr) {
//     const numberOfPairs = arr.length / 3;
//     const a = [], b = [], c = [], rest = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }

//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? " -" : rest}`];
// }