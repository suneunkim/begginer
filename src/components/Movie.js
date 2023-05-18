import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 홈에서 영화 클릭 시 url을 /movies.{movies.id} 로 하고 싶음.

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <article>
      <img src={coverImg} alt="title" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </article>
  );
}

// Movie.PropTypes = {
//   id:Prop: PropTypes.number.isRequired,
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Movie;
