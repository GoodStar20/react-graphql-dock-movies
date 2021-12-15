import { Link } from 'react-router-dom';

import './styles.scss';

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-3 mt-3">
      <div className="movie-list">
        <Link to={'/info/' + movie?.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} />
        </Link>
        <div className="title">{movie.title}</div>
      </div>
    </div>
  );
};

export default MovieCard;
