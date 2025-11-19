const movies = require('../src/data');
// const movies = [
//   {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//   }]

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array,director) {
   const MoviesFromDirector = array.filter((movie) => movie.director === director);
   console.log("director:" , MoviesFromDirector);
   return MoviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
    const moviesDirector = array.filter(movie => movie.director === director);
    const totalScore = moviesDirector.reduce((acc, m) => acc + m.score, 0);
    const mediaScore = totalScore / moviesDirector.length.toFixed(2);

    return mediaScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
    return array
    .map(movie => movie.title)         
    .sort((a, b) => a.localeCompare(b)) 
    .slice(0, 20);   
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

    return [...array].sort((a,b) => {
       if(a.year < b.year) return -1;
       if(a.year > b.year) return 1;

       return a.title.localeCompare(b.title);
    })
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
    const moviesGenre = array.filter(movie => movie.genre.includes(genre));
    const totalScore = moviesGenre.reduce((acc, m) => acc + m.score, 0);
    const mediaScore = totalScore / Number(moviesGenre.length.toFixed(2));

    return mediaScore;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
    return array.map(movie => {
      let hours = 0;
      let minutes = 0;

      if (movie.duration.includes("h")) {
        hours = parseInt(movie.duration.split("h")[0]);
      }

      if (movie.duration.includes("min")) {
        const minPart = movie.duration.split("h")[1] || movie.duration;
        minutes = parseInt(minPart.replace("min", "").trim());
      }

      const totalMinutes = hours * 60 + minutes;
      return {
        ...movie,
        duration: totalMinutes
      };
    });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

      return [array.filter(movie => movie.year === year)
      .reduce((bestScore, movie) => {
            if(movie.score > bestScore.score){
                bestScore = movie
            }
            return bestScore;
      })];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}


