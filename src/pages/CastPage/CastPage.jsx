import { getMovieCredits } from 'services/api';
import Cast from 'components/Cast';
import { Error } from './CastPage.styled';
import { useEffect, useState } from 'react';
import { startLoader, stopLoader } from 'components/Loader';
import { useParams } from 'react-router-dom';

const CastPage = () => {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState('idle');
  const { id } = useParams();

  useEffect(() => {
    setStatus('pending');
    getMovieCredits(id)
      .then(response => {
        setActors(response.cast);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        console.log(error);
      })
      .finally(() => {
        stopLoader();
      });
  }, [id]);

  return (
    <div>
      {status === 'pending' && startLoader()}
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
