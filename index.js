const movieSearch = () => {
  var api =
    "https://api.themoviedb.org/3/discover/movie?api_key=82f06c4bf728186386981e062fdd8be2&language=en-US";

  fetch(api, (req, res) => {
    console.log(res);
  })
    .then((movieData) => {
      res.json(movieData);
    })
    .catch((err) => {
      console.log(err);
    });
};
