import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_MOVIES } from '../../graphql/query';

import MovieList from '../../components/List';

const Movies = () => {
  const [searchKey, setSearchKey] = useState('');
  const [value, setValue] = useState('');

  const { loading, data } = useQuery(GET_MOVIES, { variables: { key: searchKey } });

  const getMovies = () => {
    setSearchKey(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchKey(value);
    }
  };

  return (
    <div className="text-center m-4">
      <h2 className="mb-5">Welcome!</h2>
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          className="form-control w-50 align-self-center"
          value={value}
          onKeyPress={(e) => handleKeyPress(e)}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search Movie"
        />
        <button type="button" className="btn btn-primary ms-3" onClick={getMovies}>
          Search
        </button>
      </div>
      <MovieList loading={loading} data={data} />
    </div>
  );
};

export default Movies;
