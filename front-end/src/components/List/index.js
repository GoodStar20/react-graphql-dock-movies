import { Link } from 'react-router-dom';

import Loading from '../Loading';
import MovieCard from '../MovieCard';
import './styles.scss';

const MovieList = ({ loading, data }) => {
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          {data?.movies.length > 0 ? (
            data.movies.map((movie, index) => <MovieCard movie={movie} key={index} />)
          ) : (
            <div>There is no result</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieList;
