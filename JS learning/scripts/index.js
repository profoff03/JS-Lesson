"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

first: for (let i = 0; i < 2; i++) {
    const lastMovieName = prompt("Один из последних просмотренный фильмов?", "");
    const lastMovieScore = +prompt("На сколько оцените его?", "");

    if (lastMovieName === "" || lastMovieName === null || lastMovieName.length > 50) {
        console.log("Возникла ошибка, повторите ввод");
        i--;
        continue first;
    }

    personalMovieDB["movies"][lastMovieName] = lastMovieScore;
}

console.log(personalMovieDB);
const DBCount = personalMovieDB["count"];

if (DBCount < 10) {
    console.log("мало фильмов");
}
else if (DBCount > 9 && DBCount < 31) {
    console.log("классический зритель");
}
else if (DBCount > 31) {
    console.log("киноман жесточайший");
} else {
    console.log("ошибка");
}


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



