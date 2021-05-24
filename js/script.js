"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели ?',""); // создание переменной которой присваивается значение через функцию Prompt

const personalMovieDB = {   //создание объекта
    count: numberOfFilms,
    movies: {}, // внутри объекта можно создать ключ, у которого значение так же может быть объектом
    actors: {},
    genres: {},
    private: false
};

// создание переменных и присваивание им значений через функцию Prompt
const a= prompt('Один из последних просмотренных фильмов', ''),
      b= prompt('На сколько вы оцените его', ''),
      c= prompt('Один из последних просмотренных фильмов', ''),
      d= prompt('На сколько вы оцените его', '');
// присваивание новых объектов ключу movies
    personalMovieDB.movies[a] = b; 
    personalMovieDB.movies[c] = d;
    
    console.log(personalMovieDB);
