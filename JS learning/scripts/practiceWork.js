"use strict";

let numberOfFilms = "";


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false, 
    start: function() {
        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько филомов вы уже посмотрели", "");
        }
    }, 

    rememberMyFilms : function() {
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
    }, 

    detectPersonallLevel: function() {
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
    }, 

    showMyDB : function() {
        if (!personalMovieDB["private"]) console.log(personalMovieDB);
        this.toogleVisibleDB();
        if (!personalMovieDB["private"]) console.log(personalMovieDB);
    },

    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let genresNumber = prompt(`ваш любимый жанр под номером ${i + 1}`, "").trim().toUpperCase();

            if(genresNumber === null && genresNumber.length === 0) {
                console.log("ВВедены некоректные данные");
                i--;
            } else {
                personalMovieDB["genres"][i] = genresNumber;
                personalMovieDB["genres"].sort();
            }
        }

        personalMovieDB["genres"].forEach((item, i ) =>  {
            console.log(`Любимый жанр ${i} - это ${item}`);
        });
    },

    toogleVisibleDB: function() {
        personalMovieDB["private"] ? personalMovieDB["private"] = false : personalMovieDB["private"] = true;
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonallLevel();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();