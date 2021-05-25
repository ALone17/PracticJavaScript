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

// присваивание через цикл новых объектов ключу movies
   for(let i = 0; i < 2; i++){
    let a= prompt('Один из последних просмотренных фильмов', ''),
        b= prompt('На сколько вы оцените его', '');
        if(a === null || b === null){
            i--;
        }
        else if(a.length > 50 || a.length == 0){ 
            i--;
        }
        else if( b.length > 50 || b.length == 0 ){
            i--;
        }
        else{
            personalMovieDB.movies[a]=b;
        }
        
   }

   // практика с условиями
if(personalMovieDB.count < 10){
    console.log("Просмотренно довольно мало фильмов");
}
else if(personalMovieDB.count <= 30){
    console.log("Вы классический зритель");
}
else{
    console.log("Вы киноман");
}
    
    console.log(personalMovieDB);

  