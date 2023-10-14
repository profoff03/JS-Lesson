/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adBlock = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    listMovies = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector('form.add'),
    inputAddFilm = document.querySelector(".adding__input"),
    favoriteFilmsCheckBox = document.querySelector("[type='checkbox']");
// 1
adBlock.forEach(item => {
    item.remove();
});

// 2
genre.textContent = "Драма";
// 3
poster.style.backgroundImage = 'url("img/bg.jpg")';

// lesson next

const sortArray = function (arr) {
    arr.sort();
}

const createMovieList = function (films, parents) {
    let movieHTMLList = "";
    movieDB.movies.forEach(item => {
        movieHTMLList += `<li class="promo__interactive-item">${item}
    <div class="delete"></div>
    </li>\n`;
    });

    parents.insertAdjacentHTML("afterbegin", movieHTMLList);
}

// 3
const deleteElementOnClick = function () {
    listMovies.querySelectorAll("div").forEach((item) => {
        item.addEventListener("click", () => {
            item.parentElement.remove();
        });
    });
}

// 1
addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilmName = inputAddFilm.value;
    const newFavoriteCheckBox = favoriteFilmsCheckBox.checked;
    if (newFilmName) {
        if (newFilmName.length > 21) {
            newFilmName = `${newFilmName.slice(21)}...`;
        }

        if (newFavoriteCheckBox) {
            console.log("Добавлен любимый фильм фильм");
        }


        movieDB["movies"].push(`${newFilmName}`);
        inputAddFilm.value = "";
        favoriteFilmsCheckBox.checked = false;

        sortArray(movieDB.movies);
        createMovieList(movieDB.movies, listMovies);
        deleteElementOnClick();

    } else {
        alert("Строка пустая, повторите");
        return 0;
    }


});





