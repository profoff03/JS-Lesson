"use strict";

let numberOfFilms = "";

function start() {
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько филомов вы уже посмотрели", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonallLevel() {
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
}

detectPersonallLevel();

function showMyDB() {
    if (!personalMovieDB.private) console.log(personalMovieDB);
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genresNumber = prompt(`ваш любимый жанр под номером ${i + 1}`, "").toUpperCase();
        personalMovieDB["genres"][i] = genresNumber;
    }
}

writeYourGenres();