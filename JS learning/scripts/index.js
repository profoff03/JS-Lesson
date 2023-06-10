"use strict";

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// const lastMovieSaw1 = prompt("Один из последних просмотренный фильмов?", "");
// const lastMovieScore1 = prompt("На сколько оцените его?", "");

// personalMovieDB["movies"][lastMovieSaw1] = lastMovieScore1;

// const lastMovieSaw2 = prompt("Один из последних просмотренный фильмов?", "");
// const lastMovieScore2 = prompt("На сколько оцените его?", "");

// personalMovieDB["movies"][lastMovieSaw2] = lastMovieScore2;

// console.log(personalMovieDB);

// console.log(NaN || null || !3 || undefined || 5);
// console.log(NaN || null && !3 && undefined || 5);
// console.log(5 === 5 && 3 > 1 || 5);

const iterationCount = 7;

let a = "*";
for (let i = 1; i < iterationCount; i++) {

    for (let j = 0; j < i; j++) {
        a += "**";
    }

    a += "\n";
}

const lines = 5;
let result = "";

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);



