const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

 

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последний просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a !='' && b != '' && a.length < 50) {
        
    }
    personalMovieDB.movies[a] = b;       
}

console.log(personalMovieDB);
