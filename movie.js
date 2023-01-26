const request = require("request");

function getMovie(year) {
  const url = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      data.data.forEach((movie) => {
        console.log(movie.Title);
      });
    }
  });
}

getMovie(2012)