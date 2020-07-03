const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последний просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      a1 = prompt('Один из последний просмотренных фильмов?', ''),
      b1 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;     
personalMovieDB.movies[a1] = b1;   

console.log(personalMovieDB);
