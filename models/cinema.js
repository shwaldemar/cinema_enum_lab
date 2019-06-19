const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const result = this.films.map((film) => {
    return film.title;
  });
  return result;
};

Cinema.prototype.findByTitle = function(title) {
  const result = this.films.filter((film) => {
    if(film.title === title) {
      return film;
    }
  });
  return result;
};


Cinema.prototype.filmsByGenre = function(genre) {
  const result = this.films.filter((film) => {
    if(film.genre === genre) {
      return film;
    };
  });
  return result
};

Cinema.prototype.filmsByYear = function(year) {
const result = this.films.filter((film)=> {
  if(film.year === year) {
    return film;
  };
});
return result
};

Cinema.prototype.checkYearForFilms = function(year) {
  const result = this.films.some((film) => {
    if(film.year === year) {
      return film;
    };
  });
  return result;
};

Cinema.prototype.filmsOverLength = function(length) {
  const result = this.films.map((film)=> {
   if (film.length > length) {
     return film;
   };
 });
 return result
};

Cinema.prototype.filmsTotalRun = function() {
  total = 0; 
  const result = this.films.reduce((total, film) => {
    total += film.length
  });
  return result;
}


module.exports = Cinema;












// const divByTwo = function (numbers) {
//  const result = numbers.filter((number) => {
//   return (number % 2) === 0;
//  });
//     return result
// }
// console.log(divByTwo(myNumbers));
//
// const sumNumbers = function (myNumbers) {
// const total = myNumbers.reduce((runningTotal, number) => {
//   return runningTotal + number;
// }, 0);
//
//   return total;
// }
// console.log(sumNumbers(myNumbers));
