import { useEffect, useState } from "react";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMoives = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMoives();
  }, []);
  console.log(movies);
  return (
    <>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {movies.map((item) => (
              <article key={item.id}>
                <h2>{item.title}</h2>
                <img src={item.medium_cover_image} />
                <ul>
                  {item.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
                <p>{item.year}</p>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Movie;
