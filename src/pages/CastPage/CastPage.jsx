import PropTypes from 'prop-types';
import { getMovieCredits } from 'services/api';
import Cast from 'components/Cast';
import { Error } from './CastPage.styled';
import { useEffect, useState } from 'react';

const CastPage = ({ movieId }) => {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    getMovieCredits(movieId)
      .then(response => {
        setActors(response.cast);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        console.log(error);
      });
  }, [movieId]);

  return (
    <div>
      {status === 'resolved' && actors.length > 0 && <Cast items={actors} />}
      {actors.length === 0 && (
        <Error>We don't have any information about cast of this movie</Error>
      )}
      {status === 'rejected' && (
        <p>Ups... Something went wrong. Please try again later.</p>
      )}
    </div>
  );
};

export default CastPage;

CastPage.propTypes = {
  movieId: PropTypes.string,
};
